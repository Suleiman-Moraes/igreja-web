export const environment = {
  envName: 'PROD',
  production: true,
  test: false,
  API_URL: 'https://igreja-service.herokuapp.com',

  tokenAllowedDomains: [ new RegExp('igreja-service.herokuapp.com') ],
  tokenDisallowedRoutes: [ new RegExp('\/oauth\/token') ],
  URL_LOGIN: 'https://igreja-service.herokuapp.com/#/login'
};
