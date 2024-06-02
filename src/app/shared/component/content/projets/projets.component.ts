import {Component, Input} from '@angular/core';
import {projetsPerso} from '../../../informations/projetsPerso';
import {projetsEcole} from '../../../informations/projetsEcole';
import {Platform} from '@ionic/angular';
import {Badge} from "../../../class/badge";

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss'],
})
export class ProjetsComponent {
  @Input() public isDesktop !: boolean;

  public projetsPerso = projetsPerso;
  public projetsEcole = projetsEcole;

  constructor(public platform: Platform,
              public badge: Badge) {
  }
}
