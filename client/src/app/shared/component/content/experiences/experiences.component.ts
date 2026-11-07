import { Component, Input, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import {experiencesPro} from '../../../informations/experiencesPro';
import {Platform, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonIcon} from '@ionic/angular';

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonIcon],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExperiencesComponent {
  platform = inject(Platform);

  @Input() public isDesktop !: boolean;

  public experiencesPro = experiencesPro;
}
