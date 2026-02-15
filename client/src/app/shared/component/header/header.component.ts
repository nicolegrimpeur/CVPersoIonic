import {Component, Input, OnChanges} from '@angular/core';
import {AnimationController, Platform} from '@ionic/angular';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent implements OnChanges {
  @Input() public afficheNom: boolean;

  constructor(public platform: Platform,
              private animation: AnimationController) {
  }

  ngOnChanges() {
    if (this.afficheNom) {
      this.animation.create()
        .addElement(document.querySelector('.nom'))
        .duration(500)
        .keyframes([
          {offset: 0, opacity: '0'},
          {offset: 1, opacity: '1'}
        ]).play().then();
    } else {
      this.animation.create()
        .addElement(document.querySelector('.nom'))
        .duration(500)
        .keyframes([
          {offset: 0, opacity: '1'},
          {offset: 1, opacity: '0'}
        ]).play().then();
    }
  }

  goTo(nom: string) {
    document.querySelector('#' + nom).scrollIntoView({behavior: 'smooth'});
  }

}
