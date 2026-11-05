import {Component, ChangeDetectionStrategy} from '@angular/core';
import {formations} from '../../../informations/formations';

@Component({
    selector: 'app-formation',
    templateUrl: './formation.component.html',
    styleUrls: ['./formation.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FormationComponent {
  public formations = formations;

  constructor() {
  }

}
