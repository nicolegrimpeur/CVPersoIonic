import {Component, ChangeDetectionStrategy} from '@angular/core';
import {loisirs} from '../../../informations/loisirs';
import { IonicModule } from '@ionic/angular/lazy';

@Component({
    selector: 'app-loisirs',
    templateUrl: './loisirs.component.html',
    styleUrls: ['./loisirs.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonicModule]
})
export class LoisirsComponent {
  public loisirs = loisirs;

  constructor() {
  }

}
