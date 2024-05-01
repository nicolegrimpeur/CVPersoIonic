import {Component, Input} from '@angular/core';
import {experiencesPro} from '../../../informations/experiencesPro';
import {Platform} from '@ionic/angular';


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
  @Input() public isDesktop !: boolean;

  public experiencesPro = experiencesPro;

  constructor(public platform: Platform) {
  }
}
