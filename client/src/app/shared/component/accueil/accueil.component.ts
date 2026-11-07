import { Component, OnInit, ChangeDetectionStrategy, inject, PLATFORM_ID } from '@angular/core';
import {AnimationController, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonRow} from '@ionic/angular';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonRow, NgOptimizedImage]
})
export class AccueilComponent implements OnInit {
  private animation = inject(AnimationController);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  ngOnInit() {
    // pas d'animation lors du prérendu (pas de DOM navigateur)
    if (!this.isBrowser) {
      return;
    }
    const fleche = document.querySelector('#fleche');
    if (!fleche) {
      return;
    }
    this.animation.create()
      .addElement(fleche)
      .duration(2000)
      .direction('alternate')
      .iterations(Infinity)
      .keyframes([
        {offset: 0, transform: 'translateY(0px)'},
        {offset: 1, transform: 'translateY(25px)'}
      ]).play().then();
  }

  onArrowClick() {
    const element = document.getElementById('formation');
    element?.scrollIntoView({behavior: 'smooth'});
  }
}
