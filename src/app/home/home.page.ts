import {Component} from '@angular/core';
import {experiencesPro} from '../shared/informations/experiencesPro';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public experiencesPro = experiencesPro;

  constructor() {
  }
}
