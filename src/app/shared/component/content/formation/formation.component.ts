import {Component} from '@angular/core';
import {formations} from '../../../informations/formations';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent {
  public formations = formations;

  constructor() {
  }

}
