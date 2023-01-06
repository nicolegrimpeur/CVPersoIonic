import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {projetsPerso} from '../../../informations/projetsPerso';
import {projetsEcole} from '../../../informations/projetsEcole';
import {SwiperComponent} from 'swiper/angular';
import {Platform} from '@ionic/angular';
import {Network} from '@capacitor/network';
import * as icons from 'simple-icons';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss'],
})
export class ProjetsComponent implements AfterViewInit {
  @ViewChild('swiperProjetsEcole') swiperProjetsEcole: SwiperComponent;
  @ViewChild('swiperProjetsPerso') swiperProjetsPerso: SwiperComponent;

  public projetsPerso = projetsPerso;
  public projetsEcole = projetsEcole;
  public afficheTechnologies = false;

  constructor(public platform: Platform) {
  }

  ngAfterViewInit() {
    Network.getStatus()
      .then(status => {
        if (status.connected) {
          this.afficheTechnologies = true;
        }
      });

    this.swiperProjetsEcole.swiperRef.autoplay.start();
    this.swiperProjetsEcole.swiperRef.autoplay.running = true;
    this.swiperProjetsPerso.swiperRef.autoplay.start();
    this.swiperProjetsPerso.swiperRef.autoplay.running = true;
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
