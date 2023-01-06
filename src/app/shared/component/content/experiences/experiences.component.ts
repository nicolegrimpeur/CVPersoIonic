import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {experiencesPro} from '../../../informations/experiencesPro';
import {SwiperComponent} from 'swiper/angular';
import {Platform} from '@ionic/angular';


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements AfterViewInit {
  @ViewChild('swiperExperiencesPro') swiperExperiencesPro: SwiperComponent;

  public experiencesPro = experiencesPro;

  // options pour le slider sur les expériences
  public slideOptsExperiences = {
    loop: true,
    slidesPerView: this.platform.is('desktop') ? 2 : 1
  };

  constructor(public platform: Platform) {
  }

  ngAfterViewInit() {
    this.swiperExperiencesPro.swiperRef.autoplay.start();
    this.swiperExperiencesPro.swiperRef.autoplay.running = true;
  }

}
