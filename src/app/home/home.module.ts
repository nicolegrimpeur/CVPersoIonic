import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {AccueilComponent} from '../shared/component/accueil/accueil.component';
import {ParallaxDirective} from '../shared/directive/parallax.directive';
import {ContactComponent} from '../shared/component/contact/contact.component';

import {SwiperModule} from 'swiper/angular';
import {MenuComponent} from "../shared/component/menu/menu.component";
import {HeaderComponent} from "../shared/component/header/header.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule
  ],
  declarations: [HomePage, AccueilComponent, ParallaxDirective, ContactComponent, MenuComponent, HeaderComponent]
})
export class HomePageModule {
}
