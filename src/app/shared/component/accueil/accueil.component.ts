import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {

  constructor(public platform: Platform) {
  }

}
