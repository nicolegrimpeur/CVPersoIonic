import {Component} from '@angular/core';
import {listeTechnos} from "./listeTechnos";

@Component({
    selector: 'app-technos',
    templateUrl: './technos.component.html',
    styleUrls: ['./technos.component.scss'],
    standalone: false
})
export class TechnosComponent {
  public listeTechnos = listeTechnos;

  constructor() {
  }

}
