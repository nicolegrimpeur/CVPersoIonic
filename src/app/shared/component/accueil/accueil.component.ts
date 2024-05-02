import {Component, OnInit} from '@angular/core';
import {AnimationController} from '@ionic/angular';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
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
