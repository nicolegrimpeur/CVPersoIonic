import {Component, Input, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() public afficheNom: boolean;

  constructor(public platform: Platform) {
  }

  ngOnInit() {
  }

  goTo(nom: string) {
    document.querySelector('#' + nom).scrollIntoView({behavior: 'smooth'});
  }

}
