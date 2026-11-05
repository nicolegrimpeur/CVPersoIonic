import { Component, ChangeDetectionStrategy } from '@angular/core';
import {competences} from '../../../informations/competences';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonIcon, IonLabel, IonRow} from '@ionic/angular';
import {addIcons} from 'ionicons';
import {checkmarkCircle} from 'ionicons/icons';

addIcons({checkmarkCircle});

@Component({
    selector: 'app-competences',
    templateUrl: './competences.component.html',
    styleUrls: ['./competences.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonIcon, IonLabel, IonRow]
})
export class CompetencesComponent {
  public competences = competences;

  constructor() { }

}
