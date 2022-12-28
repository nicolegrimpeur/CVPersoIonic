import {Component, OnInit, ViewChild} from '@angular/core';
import {AnimationController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {

  constructor(public platform: Platform) {
  }

  ngOnInit() {
  }

}
