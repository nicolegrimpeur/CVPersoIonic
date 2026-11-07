import {Component, ChangeDetectionStrategy} from '@angular/core';
import {formations} from '../../../informations/formations';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/angular';

@Component({
    selector: 'app-formation',
    templateUrl: './formation.component.html',
    styleUrls: ['./formation.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle]
})
export class FormationComponent {
  public formations = formations;

}
