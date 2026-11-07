import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {Platform, IonButton, IonIcon, IonLabel, IonRow, IonToolbar} from '@ionic/angular';

@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    styleUrls: ['./credits.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonButton, IonIcon, IonLabel, IonRow, IonToolbar]
})
export class CreditsComponent {
  platform = inject(Platform);
}
