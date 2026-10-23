import { matchPath } from 'react-router-dom';
import { Pages, routeTable } from './pages';

/** Load the code-split chunk for a URL before rendering it. */
export function preloadRoute(pathname: string) {
  const hit = routeTable.find((r) => r.path !== '*' && matchPath({ path: r.path, end: true }, pathname));
  return Pages[hit?.page ?? 'NotFound'].preload();
}
