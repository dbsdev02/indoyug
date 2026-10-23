import { lazy, type ComponentType } from 'react';

/**
 * React.lazy with an explicit preload(). Once preloaded, the component renders
 * synchronously — this lets the prerender script and the client entry load the
 * current route's chunk before the first render, so prerendered HTML is not
 * replaced by a loading fallback.
 */
export type PreloadablePage = ComponentType & { preload: () => Promise<void> };

export function lazyPage(factory: () => Promise<{ default: ComponentType }>): PreloadablePage {
  let Loaded: ComponentType | null = null;
  const load = () => factory().then((m) => { Loaded = m.default; return m; });
  const Lazy = lazy(load);
  const Page = () => (Loaded ? <Loaded /> : <Lazy />);
  return Object.assign(Page, { preload: () => (Loaded ? Promise.resolve() : load().then(() => undefined)) });
}
