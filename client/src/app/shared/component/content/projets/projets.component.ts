import { Component, Input, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import {projets} from '../../../informations/projets';
import {Platform, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonHeader, IonIcon} from '@ionic/angular';
import {addIcons} from 'ionicons';
import {link, logoGithub, logoGooglePlaystore} from 'ionicons/icons';

addIcons({link, logoGithub, logoGooglePlaystore});

@Component({
    selector: 'app-projets',
    templateUrl: './projets.component.html',
    styleUrls: ['./projets.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonHeader, IonIcon],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjetsComponent {
  platform = inject(Platform);

  @Input() public isDesktop !: boolean;

  public projets = projets;
}
