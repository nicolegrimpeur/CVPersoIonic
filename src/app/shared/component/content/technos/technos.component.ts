import {Component} from '@angular/core';
import {listeTechnos} from "./listeTechnos";
import {Badge} from "../../../class/badge";

@Component({
  selector: 'app-technos',
  templateUrl: './technos.component.html',
  styleUrls: ['./technos.component.scss'],
})
export class TechnosComponent {
  public listeTechnos = listeTechnos;

  constructor(public badge: Badge) {
  }

}
