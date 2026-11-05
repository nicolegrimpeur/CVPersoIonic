import {Component, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import { Platform, IonicModule } from '@ionic/angular/lazy';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonicModule]
})
export class MenuComponent {
  @ViewChild('menu') menu: { el: { close: () => void; }; };

  constructor(public platform: Platform) {
  }

  goTo(nom: string) {
    document.querySelector('#' + nom).scrollIntoView({behavior: 'smooth'});
    this.menu.el.close();
  }

}
