import {Component, ViewChild} from '@angular/core';
import {Platform} from "@ionic/angular";
import {experiencesPro} from '../shared/informations/experiencesPro';
import {competences} from '../shared/informations/competences';
import {loisirs} from '../shared/informations/loisirs';
import {certificats} from '../shared/informations/certificats';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slides') slides;

  public certificats = certificats;
  public experiencesPro = experiencesPro;
  public competences = competences;
  public loisirs = loisirs;

  public slideOpts = {
    loop: true,
    slidesPerView: this.platform.is('desktop') ? 2 : 1,
    clickable: true
  };

  constructor(public platform: Platform) {
  }

  openUrl(url: string) {
    if (url !== '') {
      window.open(url);
    }
  }

  clickSurSlide(event) {
    if (event.x > window.innerWidth / 2) {
      this.slides.slidePrev();
    } else {
      this.slides.slideNext();
    }
  }
}
