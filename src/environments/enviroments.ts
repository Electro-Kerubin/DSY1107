export const environment = {
  production: false,

  azure: {
    clientId: 'PON_AQUI_TU_CLIENT_ID',
    tenantId: 'PON_AQUI_TU_TENANT_ID',
    authority: 'https://login.microsoftonline.com/PON_TU_TENANT_ID',
    redirectUri: 'http://localhost:4200',  // Debe coincidir con lo configurado en Entra
    
    // Sólo si usarás API con scopes:
    protectedResourceScopes: ['api://TU_API_ID_URI/TU_SCOPE']
  },

  // En caso de tener backend:
  apiBaseUrl: 'http://localhost:8080'
};