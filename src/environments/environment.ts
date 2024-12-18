// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  testEnvVariable: 'This is from the environment.ts file',
  // Look at env.js in src/assets folder for the value and
  // add this line to the index.html
  // <script src="assets/env.js"></script>
  apiUrl: window[<any>"env"][<any>"apiUrl"] || "default",
  debug: window[<any>"env"][<any>"debug"] || false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
