import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {experiencesPro} from '../../../informations/experiencesPro';
import {Platform} from '@ionic/angular/lazy';


@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ExperiencesComponent {
  @Input() public isDesktop !: boolean;

  public experiencesPro = experiencesPro;

  constructor(public platform: Platform) {
  }
}
