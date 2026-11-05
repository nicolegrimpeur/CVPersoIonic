import {Component, ChangeDetectionStrategy} from '@angular/core';
import {listeTechnos} from "./listeTechnos";
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonGrid, IonRow} from '@ionic/angular';

@Component({
    selector: 'app-technos',
    templateUrl: './technos.component.html',
    styleUrls: ['./technos.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonGrid, IonRow]
})
export class TechnosComponent {
  public listeTechnos = listeTechnos;

  constructor() {
  }

}
