export const environment = {
  production: true,
  apiUrl: 'https://igreja-service.herokuapp.com',

  tokenAllowedDomains: [ new RegExp('suleiman-moraes.github.io') ],
  tokenDisallowedRoutes: [ new RegExp('\/oauth\/token') ]
};
