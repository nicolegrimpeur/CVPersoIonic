import {Component, ViewChild} from '@angular/core';
import {Platform} from '@ionic/angular';
import {formations} from '../shared/informations/formations';
import {certificats} from '../shared/informations/certificats';
import {experiencesPro} from '../shared/informations/experiencesPro';
import {projetsEcole} from '../shared/informations/projetsEcole';
import {projetsPerso} from '../shared/informations/projetsPerso';
import {competences} from '../shared/informations/competences';
import {loisirs} from '../shared/informations/loisirs';
import SwiperCore, {Pagination, Navigation } from 'swiper';
import * as icons from 'simple-icons';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public formations = formations;
  public certificats = certificats;
  public experiencesPro = experiencesPro;
  public projetsEcole = projetsEcole;
  public projetsPerso = projetsPerso;
  public competences = competences;
  public loisirs = loisirs;

  // options pour le slider sur les expériences
  public slideOptsExperiences = {
    loop: true,
    slidesPerView: this.platform.is('desktop') ? 2 : 1
  };

  constructor(public platform: Platform) {
  }

  // permet d'ouvrir un lien dans un nouvel onglet (utilisé dans les certificats
  openUrl(url: string) {
    if (url !== '') {
      window.open(url);
    }
  }

  // permet d'obtenir le long d'un logo à partir de son nom
  getLogoFromText(nom: string) {
    nom = nom.toLowerCase();
    nom = nom.replaceAll('+', 'plus');
    return nom;
  }

  // permet d'obtenir le nom d'une icône à partir de son nom
  getNomIconsFromText(nom: string) {
    nom = this.getLogoFromText(nom);
    nom = nom.replaceAll(' ', '');
    nom = nom.replaceAll('.', 'dot');
    return nom.slice(0, 1).toUpperCase() + nom.slice(1, nom.length).toLowerCase();
  }

  // permet d'obtenir la couleur d'une icône à partir de son nom
  getColorFromText(nom: string) {
    const icon = icons['si' + this.getNomIconsFromText(nom)];
    return icon !== undefined ? icon.hex : '181717';
  }
}
