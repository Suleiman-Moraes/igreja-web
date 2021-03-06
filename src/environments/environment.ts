// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

if (window.location.host.indexOf('localhost:') > -1) {}

export const environment = {
  production: false,
  test: false,
  API_URL: 'http://localhost:8080',
  tokenAllowedDomains: [ new RegExp('localhost:8080') ],
  tokenDisallowedRoutes: [ new RegExp('\/oauth\/token') ],
  URL_LOGIN: 'http://localhost:4200/#/login'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
