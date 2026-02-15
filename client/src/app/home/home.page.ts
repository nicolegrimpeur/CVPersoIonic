import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: false
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
