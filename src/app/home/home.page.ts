import {Component} from '@angular/core';
import {experiencesPro} from '../shared/informations/experiencesPro';
import {competences} from '../shared/informations/competences';
import {loisirs} from '../shared/informations/loisirs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public experiencesPro = experiencesPro;
  public competences = competences;
  public loisirs = loisirs;

  constructor() {
  }
}
