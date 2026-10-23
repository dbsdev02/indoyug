/**
 * Server entry used only at build time by scripts/prerender.mjs to produce
 * static HTML (with per-page <title>, meta, canonical and JSON-LD) for every
 * route in the manifest. Crawlers and social previews get real content.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import App from './App';
import { preloadRoute } from './routes/preload';
import { getManifest } from './routes/manifest';

export { getManifest };

export async function render(url: string) {
  await preloadRoute(url);
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );
  const h = helmetContext.helmet;
  const head = h ? [h.title.toString(), h.meta.toString(), h.link.toString(), h.script.toString()].join('\n') : '';
  return { html, head };
}
