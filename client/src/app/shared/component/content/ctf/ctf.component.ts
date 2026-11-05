import { Component, ChangeDetectionStrategy } from '@angular/core';
import {ctf} from '../../../informations/ctf';
import { IonicModule } from '@ionic/angular/lazy';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-ctf',
    templateUrl: './ctf.component.html',
    styleUrls: ['./ctf.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonicModule, NgOptimizedImage]
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
