import { Component, ChangeDetectionStrategy } from '@angular/core';
import {Platform} from '@ionic/angular/lazy';

@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    styleUrls: ['./credits.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CreditsComponent {

  constructor(public platform: Platform) { }

}
