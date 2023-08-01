import { useRoutes } from 'react-router-dom';
import React from 'react';

import { ManageOptionsPage } from '../../pages/ManageOptions';
import { MoviesListPage } from '../../pages/MoviesList';
import { MoviesFormPage } from '../../pages/MoviesForm';
import { RentMoviePage } from '../../pages/RentMovie';
import { siteRoutes } from '../../constants/constants';
import { MainLayout } from '../layout/MainLayout';

export const Routes = () => {
  const routes = [
    { path: siteRoutes.HOME, element: <MoviesListPage /> },
    { path: siteRoutes.MOVIES, element: <MoviesListPage /> },
    { path: siteRoutes.FORM, element: <MoviesFormPage /> },
    { path: siteRoutes.MANAGE_OPTIONS, element: <ManageOptionsPage /> },
    { path: siteRoutes.RENT_MOVIE, element: <RentMoviePage /> },
  ];

  const routing = useRoutes(routes);
  
  return <MainLayout>{routing}</MainLayout>;
};

export default Routes;
