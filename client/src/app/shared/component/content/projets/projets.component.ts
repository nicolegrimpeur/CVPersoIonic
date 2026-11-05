import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {projets} from '../../../informations/projets';
import {Platform} from '@ionic/angular/lazy';

@Component({
    selector: 'app-projets',
    templateUrl: './projets.component.html',
    styleUrls: ['./projets.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProjetsComponent {
  @Input() public isDesktop !: boolean;

  public projets = projets;

  constructor(public platform: Platform) {
  }
}
