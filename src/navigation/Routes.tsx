import { createBrowserRouter } from 'react-router-dom';

import ListDemosPage from '../pages/ListDemosPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <ListDemosPage />,
  },
]);

export default routes;
