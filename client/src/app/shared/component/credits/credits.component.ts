import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Platform, IonicModule } from '@ionic/angular/lazy';

@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    styleUrls: ['./credits.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonicModule]
})
export class CreditsComponent {

  constructor(public platform: Platform) { }

}
