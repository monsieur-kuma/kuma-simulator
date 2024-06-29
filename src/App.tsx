import './App.css';

import { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));

const AppLayout = () => (
  <Suspense>
    <Outlet />
  </Suspense>
);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>,
    ),
    {
      basename:
        import.meta.env.REACT_APP_STAGE === 'development'
          ? ''
          : '/rescue-station',
    },
  );

  return <RouterProvider router={router} />;
}

export default App;
