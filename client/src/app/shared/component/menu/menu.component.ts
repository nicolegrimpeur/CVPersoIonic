import {Component, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import {Platform, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonTitle, IonToolbar} from '@ionic/angular';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonTitle, IonToolbar]
})
export class MenuComponent {
  @ViewChild('menu') menu?: IonMenu;

  constructor(public platform: Platform) {
  }

  goTo(nom: string) {
    document.querySelector('#' + nom)?.scrollIntoView({behavior: 'smooth'});
    this.menu?.close();
  }

}
