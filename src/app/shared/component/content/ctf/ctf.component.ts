import { Component } from '@angular/core';
import {ctf} from '../../../informations/ctf';

@Component({
    selector: 'app-ctf',
    templateUrl: './ctf.component.html',
    styleUrls: ['./ctf.component.scss'],
    standalone: false
})
export class CtfComponent {
  public ctfs = ctf;

  constructor() { }

  // permet d'ouvrir un lien dans un nouvel onglet (utilisé dans les certificats
  openUrl(url: string) {
    if (url !== '') {
      window.open(url);
    }
  }

}
