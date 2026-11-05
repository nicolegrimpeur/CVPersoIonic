import {Component, ChangeDetectionStrategy} from '@angular/core';
import {listeTechnos} from "./listeTechnos";

@Component({
    selector: 'app-technos',
    templateUrl: './technos.component.html',
    styleUrls: ['./technos.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TechnosComponent {
  public listeTechnos = listeTechnos;

  constructor() {
  }

}
