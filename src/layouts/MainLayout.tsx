import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ScrollToTop } from '../components/layout/ScrollToTop';

function PageLoading() {
  return (
    <div className="container flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite">
      <div className="h-1 w-40 overflow-hidden rounded bg-surface"><div className="h-full w-1/3 animate-pulse bg-brand-500" /></div>
      <span className="sr-only">Loading page…</span>
    </div>
  );
}

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1" tabIndex={-1}>
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
