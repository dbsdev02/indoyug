/**
 * Reference enquiry backend (Node 18+, Express + Multer + Nodemailer).
 *
 * Contract expected by src/lib/enquiry.ts:
 *   POST multipart/form-data  →  200 {"ok":true,"reference":"IY-…"}  on success
 *                             →  4xx/5xx {"ok":false,"error":"…"}    on failure
 *
 * Install:  cd server && npm init -y && npm i express multer nodemailer
 * Run:      SMTP_HOST=… SMTP_USER=… SMTP_PASS=… ENQUIRY_TO=info@indoyug.in \
 *           ALLOWED_ORIGIN=https://www.indoyug.in node enquiry-handler.mjs
 *
 * Secrets (SMTP credentials) live ONLY in server environment variables —
 * never in VITE_* variables, which are shipped to the browser.
 */
import express from 'express';
import multer from 'multer';
import nodemailer from 'nodemailer';
import crypto from 'node:crypto';

const PORT = Number(process.env.PORT || 8787);
const ORIGIN = process.env.ALLOWED_ORIGIN || 'https://www.indoyug.in';
const TO = process.env.ENQUIRY_TO || 'info@indoyug.in';
const MAX_MB = 10;
const ALLOWED_EXT = ['pdf', 'dwg', 'dxf', 'jpg', 'jpeg', 'png', 'doc', 'docx', 'xls', 'xlsx', 'zip'];

const app = express();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: MAX_MB * 1024 * 1024, fields: 40 } });
const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 587), secure: process.env.SMTP_SECURE === 'true',
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

// Very small in-memory rate limit: 5 submissions / 10 min / IP. Use a shared store in production clusters.
const hits = new Map();
const limited = (ip) => {
  const now = Date.now(), win = 10 * 60 * 1000;
  const list = (hits.get(ip) || []).filter((t) => now - t < win);
  list.push(now); hits.set(ip, list);
  return list.length > 5;
};

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Accept');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

const clean = (v, max = 3000) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[+()\-\s\d]{7,20}$/;

app.post('/api/enquiry', upload.single('attachment'), async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for']?.toString().split(',')[0].trim() || req.socket.remoteAddress || '';
    if (limited(ip)) return res.status(429).json({ ok: false, error: 'Too many submissions. Please try again later or email info@indoyug.in.' });

    const b = req.body || {};
    // Spam checks (mirrors the client): honeypot must be empty, form must take ≥3 s.
    if (b.website) return res.status(200).json({ ok: true, reference: 'IY-' + crypto.randomBytes(3).toString('hex') }); // silently drop bots
    if (Number(b.elapsedMs) < 3000) return res.status(400).json({ ok: false, error: 'Submission rejected. Please try again.' });

    const d = {
      kind: clean(b.kind, 30), page: clean(b.page, 200), context: clean(b.context, 200),
      fullName: clean(b.fullName, 100), company: clean(b.company, 150), email: clean(b.email, 200), phone: clean(b.phone, 30),
      location: clean(b.location, 120), category: clean(b.category, 60), product: clean(b.productName || b.product, 150),
      quantity: clean(b.quantity, 50), projectType: clean(b.projectType, 100), timeline: clean(b.timeline, 100),
      specifications: clean(b.specifications, 2000), message: clean(b.message, 3000),
    };
    const errors = [];
    if (d.fullName.length < 2) errors.push('name');
    if (d.company.length < 2) errors.push('company');
    if (!emailRe.test(d.email)) errors.push('email');
    if (!phoneRe.test(d.phone)) errors.push('phone');
    if (b.consent !== 'true') errors.push('consent');
    if (errors.length) return res.status(422).json({ ok: false, error: `Please check: ${errors.join(', ')}.` });

    const attachments = [];
    if (req.file) {
      const ext = req.file.originalname.split('.').pop()?.toLowerCase() || '';
      if (!ALLOWED_EXT.includes(ext)) return res.status(415).json({ ok: false, error: 'Unsupported attachment type.' });
      attachments.push({ filename: req.file.originalname.replace(/[^\w.\- ]/g, '_'), content: req.file.buffer });
    }

    const reference = `IY-${new Date().toISOString().slice(2, 10).replace(/-/g, '')}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;
    const rows = Object.entries(d).filter(([, v]) => v).map(([k, v]) => `<tr><th align="left" style="padding:4px 12px 4px 0">${k}</th><td>${esc(v).replace(/\n/g, '<br>')}</td></tr>`).join('');
    await transport.sendMail({
      from: `"Indoyug website" <${process.env.SMTP_USER}>`, to: TO, replyTo: d.email,
      subject: `[${reference}] ${d.kind} enquiry — ${d.company}${d.product ? ` — ${d.product}` : ''}`,
      html: `<table>${rows}</table>`, attachments,
    });
    // Only now — after the email was accepted — do we confirm success to the browser.
    res.json({ ok: true, reference });
  } catch (err) {
    console.error(err);
    const tooBig = err?.code === 'LIMIT_FILE_SIZE';
    res.status(tooBig ? 413 : 500).json({ ok: false, error: tooBig ? `Attachment exceeds ${MAX_MB} MB.` : 'We could not send your enquiry. Please email info@indoyug.in.' });
  }
});

app.listen(PORT, () => console.log(`Enquiry handler on :${PORT}`));
