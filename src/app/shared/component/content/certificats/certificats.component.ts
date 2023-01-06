import {Component, OnInit} from '@angular/core';
import {certificats} from '../../../informations/certificats';

@Component({
  selector: 'app-certificats',
  templateUrl: './certificats.component.html',
  styleUrls: ['./certificats.component.scss'],
})
export class CertificatsComponent implements OnInit {
  public certificats = certificats;

  constructor() {
  }

  ngOnInit() {
  }

  // permet d'ouvrir un lien dans un nouvel onglet (utilisé dans les certificats
  openUrl(url: string) {
    if (url !== '') {
      window.open(url);
    }
  }
}
