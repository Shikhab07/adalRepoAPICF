// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  adalConfig: {
    tenant: 'shibas.onmicrosoft.com',
    clientId: 'd663212d-da0c-49e6-82d0-1140afb9da66',
    redirectUri: window.location.origin + '/login',
    cacheLocation: 'localStorage',
    navigateToLoginRequestUrl: false
  }
};
