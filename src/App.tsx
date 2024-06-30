import './App.css';

import { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { Sider } from './features/layout/components';

const Home = lazy(() => import('./pages/Home'));

const AppLayout = () => (
  <Suspense>
    <div
      className="grid grid-cols-7 font-mono"
      style={{
        height: '100vh',
        width: '100vw',
        padding: '0.5rem',
      }}
    >
      <div className="col-span-1">
        <Sider />
      </div>
      <div className="col-span-6">
        <Outlet />
      </div>
    </div>
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
