import { PublicClientApplication, IPublicClientApplication, LogLevel, BrowserCacheLocation} from '@azure/msal-browser';
import { environment } from './environments/environment';

export function msalInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: environment.azure.clientId,
      authority: environment.azure.authority,
      redirectUri: environment.azure.redirectUri
    },
    cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,
        //storeAuthStateInCookie: false, // solo true si se requiere IE11/Edge legacy
    },
    system: {
        
    }
  });
}