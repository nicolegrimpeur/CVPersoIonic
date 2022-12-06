import {Component, ViewChild} from '@angular/core';
import {Platform} from '@ionic/angular';
import {formations} from '../shared/informations/formations';
import {certificats} from '../shared/informations/certificats';
import {experiencesPro} from '../shared/informations/experiencesPro';
import {competences} from '../shared/informations/competences';
import {loisirs} from '../shared/informations/loisirs';
import SwiperCore, {Pagination, Navigation } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slides') slides;

  public formations = formations;
  public certificats = certificats;
  public experiencesPro = experiencesPro;
  public competences = competences;
  public loisirs = loisirs;

  public slideOpts = {
    loop: true,
    slidesPerView: this.platform.is('desktop') ? 2 : 1,
    clickable: true
  };

  private swiper;

  constructor(public platform: Platform) {
    // this.swiper = new Swiper('.swiper', {
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    // });
  }

  openUrl(url: string) {
    if (url !== '') {
      window.open(url);
    }
  }

  clickSurSlide(event) {
    // if (event.x > window.innerWidth / 2) {
    //   this.slides.sl
    //   this.slides.slidePrev();
    // } else {
    //   this.slides.slideNext();
    // }
  }
}
