import {Component, ViewChild} from '@angular/core';
import {AnimationController, Platform} from '@ionic/angular';
import {formations} from '../shared/informations/formations';
import {certificats} from '../shared/informations/certificats';
import {experiencesPro} from '../shared/informations/experiencesPro';
import {projetsEcole} from '../shared/informations/projetsEcole';
import {projetsPerso} from '../shared/informations/projetsPerso';
import {competences} from '../shared/informations/competences';
import {loisirs} from '../shared/informations/loisirs';
import SwiperCore, {Pagination, Navigation, Autoplay} from 'swiper';
import * as icons from 'simple-icons';
import {SwiperComponent} from 'swiper/angular';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('swiperExperiencesPro') swiperExperiencesPro: SwiperComponent;
  @ViewChild('swiperProjetsEcole') swiperProjetsEcole: SwiperComponent;
  @ViewChild('swiperProjetsPerso') swiperProjetsPerso: SwiperComponent;

  public formations = formations;
  public certificats = certificats;
  public experiencesPro = experiencesPro;
  public projetsEcole = projetsEcole;
  public projetsPerso = projetsPerso;
  public competences = competences;
  public loisirs = loisirs;

  public afficheNom = false;

  // options pour le slider sur les expériences
  public slideOptsExperiences = {
    loop: true,
    slidesPerView: this.platform.is('desktop') ? 2 : 1
  };

  constructor(
    public platform: Platform,
    private animation: AnimationController,) {
  }

  ionViewDidEnter() {
    this.animation.create()
      .addElement(document.querySelector('.fleche'))
      .duration(2000)
      .direction('alternate')
      .iterations(Infinity)
      .keyframes([
        {offset: 0, transform: 'translateY(0px)'},
        {offset: 1, transform: 'translateY(25px)'}
      ]).play().then();

    this.initSwiper();
  }

  initSwiper() {
    this.swiperExperiencesPro.swiperRef.autoplay.start();
    this.swiperProjetsEcole.swiperRef.autoplay.start();
    this.swiperProjetsPerso.swiperRef.autoplay.start();
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

  // événement lors du scroll
  eventScroll(e) {
    console.log(e.detail.scrollTop);
    this.afficheNom = e.detail.scrollTop > 500;
  }
}
