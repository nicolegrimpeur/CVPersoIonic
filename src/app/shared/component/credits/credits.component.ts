import { Component } from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    styleUrls: ['./credits.component.scss'],
    standalone: false
})
export class CreditsComponent {

  constructor(public platform: Platform) { }

}
