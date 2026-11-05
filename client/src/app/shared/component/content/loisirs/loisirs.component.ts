import {Component, ChangeDetectionStrategy} from '@angular/core';
import {loisirs} from '../../../informations/loisirs';

@Component({
    selector: 'app-loisirs',
    templateUrl: './loisirs.component.html',
    styleUrls: ['./loisirs.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LoisirsComponent {
  public loisirs = loisirs;

  constructor() {
  }

}
