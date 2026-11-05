import {Component, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import {Platform} from '@ionic/angular/lazy';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
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
