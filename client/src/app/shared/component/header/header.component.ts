import {Component, Input, OnChanges, ChangeDetectionStrategy} from '@angular/core';
import {AnimationController, Platform, IonButton, IonButtons, IonHeader, IonMenuButton, IonText, IonTitle, IonToolbar} from '@ionic/angular';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonButton, IonButtons, IonHeader, IonMenuButton, IonText, IonTitle, IonToolbar]
})
export class HeaderComponent implements OnChanges {
  @Input() public afficheNom = false;

  constructor(public platform: Platform,
              private animation: AnimationController) {
  }

  ngOnChanges() {
    const nom = document.querySelector('.nom');
    if (!nom) {
      return;
    }
    if (this.afficheNom) {
      this.animation.create()
        .addElement(nom)
        .duration(500)
        .keyframes([
          {offset: 0, opacity: '0'},
          {offset: 1, opacity: '1'}
        ]).play().then();
    } else {
      this.animation.create()
        .addElement(nom)
        .duration(500)
        .keyframes([
          {offset: 0, opacity: '1'},
          {offset: 1, opacity: '0'}
        ]).play().then();
    }
  }

  goTo(nom: string) {
    document.querySelector('#' + nom)?.scrollIntoView({behavior: 'smooth'});
  }

}
