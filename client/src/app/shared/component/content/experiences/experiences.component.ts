import {Component, Input, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {experiencesPro} from '../../../informations/experiencesPro';
import {Platform, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonIcon} from '@ionic/angular';
import {addIcons} from 'ionicons';
import {link} from 'ionicons/icons';


addIcons({link});

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonIcon],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExperiencesComponent {
  @Input() public isDesktop !: boolean;

  public experiencesPro = experiencesPro;

  constructor(public platform: Platform) {
  }
}
