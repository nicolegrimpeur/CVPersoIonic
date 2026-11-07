import { Component, ChangeDetectionStrategy } from '@angular/core';
import {competences} from '../../../informations/competences';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonIcon, IonLabel, IonRow} from '@ionic/angular';

@Component({
    selector: 'app-competences',
    templateUrl: './competences.component.html',
    styleUrls: ['./competences.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonIcon, IonLabel, IonRow]
})
export class CompetencesComponent {
  public competences = competences;

}
