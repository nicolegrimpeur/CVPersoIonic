import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {PreloadAllModules, provideRouter, RouteReuseStrategy, withPreloading} from '@angular/router';
import {IonicRouteStrategy, provideIonicAngular} from '@ionic/angular';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(),
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ]
};
