import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {AccueilComponent} from '../shared/component/accueil/accueil.component';
import {ParallaxDirective} from '../shared/directive/parallax.directive';
import {ImgParallaxeComponent} from "../shared/component/img-parallaxe/img-parallaxe.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, AccueilComponent, ParallaxDirective, ImgParallaxeComponent]
})
export class HomePageModule {}
