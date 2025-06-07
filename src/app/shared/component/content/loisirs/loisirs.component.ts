import {Component} from '@angular/core';
import {loisirs} from '../../../informations/loisirs';

@Component({
    selector: 'app-loisirs',
    templateUrl: './loisirs.component.html',
    styleUrls: ['./loisirs.component.scss'],
    standalone: false
})
export class LoisirsComponent {
  public loisirs = loisirs;

  constructor() {
  }

}
