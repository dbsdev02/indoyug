import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Pages, routeTable } from './routes/pages';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routeTable.map(({ path, page }) => {
          const Page = Pages[page];
          return path === '/' ? <Route key="home" index element={<Page />} /> : <Route key={path} path={path} element={<Page />} />;
        })}
      </Route>
    </Routes>
  );
}
