import {Component, ChangeDetectionStrategy} from '@angular/core';
import {loisirs} from '../../../informations/loisirs';
import {IonCard, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonLabel, IonRow} from '@ionic/angular';

@Component({
    selector: 'app-loisirs',
    templateUrl: './loisirs.component.html',
    styleUrls: ['./loisirs.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonCard, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonLabel, IonRow]
})
export class LoisirsComponent {
  public loisirs = loisirs;

}
