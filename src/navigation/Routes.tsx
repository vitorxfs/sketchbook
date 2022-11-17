import { createBrowserRouter } from 'react-router-dom';

import DemoPage from '../pages/DemoPage';

import ListDemosPage from '../pages/ListDemosPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <ListDemosPage />,
  },
  {
    path: '/demo/:slug',
    element: <DemoPage />,
  },
]);

export default routes;
