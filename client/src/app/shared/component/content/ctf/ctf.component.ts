import { Component, ChangeDetectionStrategy } from '@angular/core';
import {ctf} from '../../../informations/ctf';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail} from '@ionic/angular';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-ctf',
    templateUrl: './ctf.component.html',
    styleUrls: ['./ctf.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail, NgOptimizedImage]
})
export class CtfComponent {
  public ctfs = ctf;

  // permet d'ouvrir un lien dans un nouvel onglet (utilisé dans les certificats
  openUrl(url: string) {
    if (url !== '') {
      window.open(url);
    }
  }

}
