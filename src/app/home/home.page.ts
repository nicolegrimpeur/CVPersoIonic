import {Component} from '@angular/core';
import {AnimationController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public afficheNom = false;
  public isDesktop = this.platform.is('desktop');

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
  }

  // événement lors du scroll
  eventScroll(e) {
    this.afficheNom = e.detail.scrollTop > 500;
  }
}
