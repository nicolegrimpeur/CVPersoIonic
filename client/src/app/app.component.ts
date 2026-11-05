import {Component, ChangeDetectionStrategy} from '@angular/core';
import {IonApp, IonRouterOutlet} from '@ionic/angular';
import {register} from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [IonApp, IonRouterOutlet]
})
export class AppComponent {
}
