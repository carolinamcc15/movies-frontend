export const siteRoutes = {
  HOME: '/',
  MOVIES: '/movies',
  FORM: '/formulario',
  RENT_MOVIE: '/rentar-pelicula',
  MANAGE_OPTIONS: '/administrar-opciones',
};

export const sidebarOptions = [
  {
    route: siteRoutes.MOVIES,
    name: 'Listado de películas',
  },
  {
    route: siteRoutes.FORM,
    name: 'Formulario',
  },
  {
    route: siteRoutes.RENT_MOVIE,
    name: 'Rentar película',
  },
  {
    route: siteRoutes.MANAGE_OPTIONS,
    name: 'Administrar opciones',
  },
];
