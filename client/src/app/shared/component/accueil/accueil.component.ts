import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import {AnimationController, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonRow} from '@ionic/angular';
import {addIcons} from 'ionicons';
import {documentText} from 'ionicons/icons';
import { NgOptimizedImage } from '@angular/common';

addIcons({documentText});

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonRow, NgOptimizedImage]
})
export class AccueilComponent implements OnInit {
  private animation = inject(AnimationController);

  ngOnInit() {
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
