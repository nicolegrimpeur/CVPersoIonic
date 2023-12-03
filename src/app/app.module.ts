import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {provideMatomo} from 'ngx-matomo-client';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    provideMatomo({trackerUrl: 'https://nicob.ovh/matomo/', siteId: '3'})],
  bootstrap: [AppComponent]
})
export class AppModule {
}
