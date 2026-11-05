import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { AnimationController, IonicModule } from '@ionic/angular/lazy';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonicModule, NgOptimizedImage]
})
export class AccueilComponent implements OnInit {
  constructor(private animation: AnimationController) {
  }

  ngOnInit() {
    this.animation.create()
      .addElement(document.querySelector('#fleche'))
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
    element.scrollIntoView({behavior: 'smooth'});
  }
}
