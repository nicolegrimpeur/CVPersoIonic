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
import {CreditsComponent} from '../shared/component/credits/credits.component';
import {LoisirsComponent} from '../shared/component/content/loisirs/loisirs.component';
import {FormationComponent} from '../shared/component/content/formation/formation.component';
import {CertificatsComponent} from '../shared/component/content/certificats/certificats.component';
import {ExperiencesComponent} from '../shared/component/content/experiences/experiences.component';
import {ProjetsComponent} from '../shared/component/content/projets/projets.component';
import {CompetencesComponent} from '../shared/component/content/competences/competences.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule
  ],
  declarations: [HomePage, AccueilComponent, ContactComponent, MenuComponent, HeaderComponent, CreditsComponent, LoisirsComponent, FormationComponent, CertificatsComponent, ExperiencesComponent, ProjetsComponent, CompetencesComponent]
})
export class HomePageModule {
}
