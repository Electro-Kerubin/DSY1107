export const environment = {
  production: false,

  azure: {
    clientId: '34af23ca-2be7-4f00-93bb-a6e711c38dba',
    tenantId: '7da49cdc-96c1-4342-bf8b-54142c0c27d8',
    authority: 'https://login.microsoftonline.com/7da49cdc-96c1-4342-bf8b-54142c0c27d8',
    redirectUri: 'http://localhost:4200',  // Debe coincidir con lo configurado en Entra
    
    // Sólo si usarás API con scopes:
    protectedResourceScopes: ['api://34af23ca-2be7-4f00-93bb-a6e711c38dba/access_as_user']
  },

  // En caso de tener backend:
  apiBaseUrl: 'http://localhost:8080'
};