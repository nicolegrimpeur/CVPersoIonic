import { Component, ChangeDetectionStrategy } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent {
  constructor() {}
}
