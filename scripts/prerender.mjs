/**
 * Post-build step:
 *  1. Prerenders every URL in src/routes/manifest.ts to static HTML
 *     (real content + per-page <title>, meta, canonical, OG and JSON-LD).
 *  2. Writes sitemap.xml, robots.txt and 301-redirect files for the old
 *     WordPress URLs (Netlify _redirects, vercel.json, Apache .htaccess).
 *
 * Run automatically by `npm run build`.
 */
import { createServer } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const env = loadEnv();
const SITE = (env.VITE_SITE_URL || 'https://www.indoyug.in').replace(/\/$/, '');

/** Old www.indoyug.in (WordPress) URLs → new routes. */
const REDIRECTS = {
  '/about': '/about-us',
  '/contact': '/contact-us',
  '/c-frame-design': '/products',
  '/laboratory-furniture': '/products/laboratory-furniture',
  '/laboratory-cabinets-storage': '/products/laboratory-storage-cabinets',
  '/fume-hoods': '/products/fume-hoods',
  '/anti-vibration-table-description': '/products/anti-vibration-tables',
  '/biosafety-cabinet': '/products/biosafety-cabinets',
  '/stand-mounted-vertical-laminar-airflow': '/products/laminar-air-flow-units',
  '/static-pass-box': '/products/static-pass-box',
  '/sterile-garment-cabinet': '/products/dynamic-pass-box', // old menu labelled this "Dynamic Pass Box"
  '/cross-over-bench': '/products/cross-over-bench',
  '/lockers-2': '/products/garment-storage-cabinets',
  '/storage-vessel': '/products/laboratory-sink-units', // old menu labelled this "Sink Unit"
  '/pressure-vessel': '/products/ss-trolleys', // old menu labelled this "Trolley"
};

function loadEnv() {
  const out = { ...process.env };
  for (const f of ['.env', '.env.production', '.env.local', '.env.production.local']) {
    const p = path.join(root, f);
    if (!fs.existsSync(p)) continue;
    for (const line of fs.readFileSync(p, 'utf8').split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*([^#\n]*)/);
      if (m) out[m[1]] = m[2].trim();
    }
  }
  return out;
}

const vite = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error', mode: 'production', ssr: { noExternal: ['react-helmet-async'] } });
try {
  const { render, getManifest } = await vite.ssrLoadModule('/src/entry-server.tsx');
  const template = fs
    .readFileSync(path.join(dist, 'index.html'), 'utf8')
    .replace(/<title>[\s\S]*?<\/title>\s*/, '')
    .replace(/<meta name="description"[^>]*>\s*/, '');

  const inject = ({ html, head }) => template.replace('</head>', `${head}\n  </head>`).replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const manifest = getManifest();
  for (const entry of manifest) {
    const out = entry.path === '/' ? path.join(dist, 'index.html') : path.join(dist, entry.path.slice(1), 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, inject(await render(entry.path)));
  }
  fs.writeFileSync(path.join(dist, '404.html'), inject(await render('/__not-found__')));
  console.log(`✓ prerendered ${manifest.length} routes + 404.html`);

  // sitemap.xml
  const today = new Date().toISOString().slice(0, 10);
  const urls = manifest.filter((e) => e.index).map((e) =>
    `  <url><loc>${SITE}${e.path === '/' ? '/' : e.path}</loc><lastmod>${today}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority.toFixed(1)}</priority></url>`);
  fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
  fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /search\nDisallow: /thank-you\n\nSitemap: ${SITE}/sitemap.xml\n`);
  console.log(`✓ sitemap.xml (${urls.length} URLs) and robots.txt`);

  // Redirects for common hosts
  const pairs = Object.entries(REDIRECTS);
  fs.writeFileSync(path.join(dist, '_redirects'),
    pairs.flatMap(([from, to]) => [`${from}  ${to}  301`, `${from}/  ${to}  301`]).join('\n') + '\n/*  /404.html  404\n');
  fs.writeFileSync(path.join(dist, 'vercel.json'), JSON.stringify({
    cleanUrls: true, trailingSlash: false,
    redirects: pairs.map(([source, destination]) => ({ source: `${source}{/}?`, destination, permanent: true })),
  }, null, 2));
  fs.writeFileSync(path.join(dist, '.htaccess'), [
    '# Apache / cPanel hosting',
    'Options -MultiViews',
    'RewriteEngine On',
    ...pairs.map(([from, to]) => `RewriteRule ^${from.slice(1)}/?$ ${to} [R=301,L]`),
    '# Serve prerendered directories, else the custom 404 page',
    'DirectorySlash Off',
    'RewriteCond %{REQUEST_FILENAME} !-f',
    'RewriteCond %{REQUEST_FILENAME}/index.html -f',
    'RewriteRule ^(.+?)/?$ $1/index.html [L]',
    'ErrorDocument 404 /404.html',
    '<FilesMatch "\\.(js|css)$">',
    '  Header set Cache-Control "public, max-age=31536000, immutable"',
    '</FilesMatch>',
    '',
  ].join('\n'));
  console.log(`✓ ${pairs.length} legacy redirects written (_redirects, vercel.json, .htaccess)`);
} finally {
  await vite.close();
}
