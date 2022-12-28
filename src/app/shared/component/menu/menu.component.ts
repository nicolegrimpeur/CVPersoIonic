import {Component, OnInit, ViewChild} from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ViewChild('menu') menu;

  constructor(public platform: Platform) {
  }

  ngOnInit() {
  }

  goTo(nom: string) {
    document.querySelector('#' + nom).scrollIntoView({behavior: 'smooth'});
    this.menu.el.close();
  }

}
