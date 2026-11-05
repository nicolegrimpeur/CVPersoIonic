import {Component, ChangeDetectionStrategy} from '@angular/core';
import {formations} from '../../../informations/formations';
import { IonicModule } from '@ionic/angular/lazy';

@Component({
    selector: 'app-formation',
    templateUrl: './formation.component.html',
    styleUrls: ['./formation.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonicModule]
})
export class FormationComponent {
  public formations = formations;

  constructor() {
  }

}
