export const environment = {
  production: true,
  testEnvVariable: 'This is from the prod environment.ts file',
  // Look at env.js in src/assets folder for the value and
  // add this line to the index.html
  // <script src="assets/env.js"></script>
  apiUrl: window[<any>"env"][<any>"apiUrl"] || "default",
  debug: window[<any>"env"][<any>"debug"] || false
};
