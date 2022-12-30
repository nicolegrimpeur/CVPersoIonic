import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {AccueilComponent} from '../shared/component/accueil/accueil.component';
import {ContactComponent} from '../shared/component/contact/contact.component';

import {SwiperModule} from 'swiper/angular';
import {MenuComponent} from '../shared/component/menu/menu.component';
import {HeaderComponent} from '../shared/component/header/header.component';
import {CreditsComponent} from "../shared/component/credits/credits.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule
  ],
    declarations: [HomePage, AccueilComponent, ContactComponent, MenuComponent, HeaderComponent, CreditsComponent]
})
export class HomePageModule {
}
