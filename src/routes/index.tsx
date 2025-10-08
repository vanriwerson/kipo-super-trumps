import type { RouteObject } from 'react-router-dom';
import { Home, Gallery, Game, Settings } from '../pages';
import App from '../App';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'game',
        element: <Game />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
];

export default routes;
