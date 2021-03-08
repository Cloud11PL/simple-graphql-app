import { MainPage } from 'Pages';
import { RoutesType } from './types';

const ROUTES: RoutesType[] = [
  {
    path: '/',
    exact: true,
    component: MainPage,
  },
];

export default ROUTES;
