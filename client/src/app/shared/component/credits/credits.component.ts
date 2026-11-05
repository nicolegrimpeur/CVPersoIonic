import { Component, ChangeDetectionStrategy } from '@angular/core';
import {Platform, IonButton, IonIcon, IonLabel, IonRow, IonToolbar} from '@ionic/angular';
import {addIcons} from 'ionicons';
import {logoGithub} from 'ionicons/icons';

addIcons({logoGithub});

@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    styleUrls: ['./credits.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonButton, IonIcon, IonLabel, IonRow, IonToolbar]
})
export class CreditsComponent {

  constructor(public platform: Platform) { }

}
