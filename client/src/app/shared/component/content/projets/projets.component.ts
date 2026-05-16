import {Component, Input} from '@angular/core';
import {projets} from '../../../informations/projets';
import {Platform} from '@ionic/angular';
import {Badge} from "../../../class/badge";

@Component({
    selector: 'app-projets',
    templateUrl: './projets.component.html',
    styleUrls: ['./projets.component.scss'],
    standalone: false
})
export class ProjetsComponent {
  @Input() public isDesktop !: boolean;

  public projets = projets;

  constructor(public platform: Platform,
              public badge: Badge) {
  }
}
