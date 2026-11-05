import { Component, ChangeDetectionStrategy } from '@angular/core';
import {competences} from '../../../informations/competences';
import { IonicModule } from '@ionic/angular/lazy';

@Component({
    selector: 'app-competences',
    templateUrl: './competences.component.html',
    styleUrls: ['./competences.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonicModule]
})
export class CompetencesComponent {
  public competences = competences;

  constructor() { }

}
