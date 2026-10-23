import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { preloadRoute } from './routes/preload';
import './index.css';

declare global { interface Window { __INDOYUG_APP__?: boolean } }

// Load the current route's chunk first so the prerendered HTML is replaced
// by identical content, without a loading flash.
preloadRoute(window.location.pathname).finally(() => {
  window.__INDOYUG_APP__ = true;
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>,
  );
});
