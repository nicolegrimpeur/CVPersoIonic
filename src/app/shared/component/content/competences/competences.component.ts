import { Component } from '@angular/core';
import {competences} from '../../../informations/competences';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent {
  public competences = competences;

  constructor() { }

}
