export const environment = {
  production: true,
  adalConfig: {
    tenant: 'shibas.onmicrosoft.com',
    clientId: 'd663212d-da0c-49e6-82d0-1140afb9da66',
    redirectUri: window.location.origin + '/login',
    cacheLocation: 'localStorage',
    navigateToLoginRequestUrl: false
  }
};
