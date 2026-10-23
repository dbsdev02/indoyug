/**
 * Enquiry submission client.
 *
 * Posts multipart/form-data to VITE_ENQUIRY_ENDPOINT. Success is ONLY
 * reported when the backend answers 2xx with JSON `{ ok: true }`. If no
 * endpoint is configured, or anything else happens, an error is returned —
 * the UI never fakes a successful submission.
 *
 * See /server/README.md for the reference backend contract.
 */
export type EnquiryKind = 'quote' | 'contact' | 'product' | 'manufacturing' | 'project' | 'quality';

export interface EnquiryResult {
  ok: boolean;
  reference?: string;
  error?: string;
}

const ENDPOINT = (import.meta.env.VITE_ENQUIRY_ENDPOINT as string | undefined)?.trim();

export const enquiryConfigured = Boolean(ENDPOINT);

export async function submitEnquiry(kind: EnquiryKind, data: Record<string, unknown>, file?: File | null): Promise<EnquiryResult> {
  if (!ENDPOINT) {
    return {
      ok: false,
      error: 'Online submission is not yet connected on this website. Please email info@indoyug.in or call +91 75672 24020 — your details have not been sent.',
    };
  }
  const body = new FormData();
  body.append('kind', kind);
  body.append('page', typeof window !== 'undefined' ? window.location.pathname : '');
  for (const [k, v] of Object.entries(data)) {
    if (v === undefined || v === null || k === 'attachment') continue;
    body.append(k, typeof v === 'string' ? v : JSON.stringify(v));
  }
  if (file) body.append('attachment', file);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  try {
    const res = await fetch(ENDPOINT, { method: 'POST', body, signal: controller.signal, headers: { Accept: 'application/json' } });
    const json = (await res.json().catch(() => null)) as { ok?: boolean; reference?: string; error?: string } | null;
    if (res.ok && json?.ok === true) return { ok: true, reference: json.reference };
    return { ok: false, error: json?.error || `The server could not accept your enquiry (status ${res.status}). Please try again or email info@indoyug.in.` };
  } catch (err) {
    const aborted = err instanceof DOMException && err.name === 'AbortError';
    return { ok: false, error: aborted ? 'The request timed out. Please check your connection and try again.' : 'We could not reach the server. Please check your connection, or email info@indoyug.in.' };
  } finally {
    clearTimeout(timer);
  }
}
