import {Component, ChangeDetectionStrategy} from '@angular/core';
import { Platform, IonicModule } from '@ionic/angular/lazy';
import { MenuComponent } from '../shared/component/menu/menu.component';
import { HeaderComponent } from '../shared/component/header/header.component';
import { AccueilComponent } from '../shared/component/accueil/accueil.component';
import { ExperiencesComponent } from '../shared/component/content/experiences/experiences.component';
import { FormationComponent } from '../shared/component/content/formation/formation.component';
import { CertificatsComponent } from '../shared/component/content/certificats/certificats.component';
import { ProjetsComponent } from '../shared/component/content/projets/projets.component';
import { CtfComponent } from '../shared/component/content/ctf/ctf.component';
import { CompetencesComponent } from '../shared/component/content/competences/competences.component';
import { TechnosComponent } from '../shared/component/content/technos/technos.component';
import { ContactComponent } from '../shared/component/contact/contact.component';
import { CreditsComponent } from '../shared/component/credits/credits.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MenuComponent, HeaderComponent, IonicModule, AccueilComponent, ExperiencesComponent, FormationComponent, CertificatsComponent, ProjetsComponent, CtfComponent, CompetencesComponent, TechnosComponent, ContactComponent, CreditsComponent]
})
export class HomePage {
  public afficheNom = false;
  public isDesktop = this.platform.is('desktop');

  constructor(public platform: Platform) {
  }

  // événement lors du scroll
  eventScroll(e: { detail: { scrollTop: number; }; }) {
    this.afficheNom = e.detail.scrollTop > 500;
  }
}
