import {Component, ChangeDetectionStrategy} from '@angular/core';
import {listeTechnos} from "./listeTechnos";
import { IonicModule } from '@ionic/angular/lazy';

@Component({
    selector: 'app-technos',
    templateUrl: './technos.component.html',
    styleUrls: ['./technos.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonicModule]
})
export class TechnosComponent {
  public listeTechnos = listeTechnos;

  constructor() {
  }

}
