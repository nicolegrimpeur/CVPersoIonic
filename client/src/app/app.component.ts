import {Component, ChangeDetectionStrategy, DOCUMENT, inject, PLATFORM_ID} from '@angular/core';
import {isPlatformServer} from '@angular/common';
import {IonApp, IonRouterOutlet} from '@ionic/angular';
import {register} from 'swiper/element/bundle';
import {donneesStructurees} from './shared/seo/donnees-structurees';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [IonApp, IonRouterOutlet]
})
export class AppComponent {
  constructor() {
    // Ajout des données structurées (JSON-LD) dans le HTML prérendu uniquement
    if (isPlatformServer(inject(PLATFORM_ID))) {
      const document = inject(DOCUMENT);
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(donneesStructurees()).replace(/</g, '\\u003c');
      document.head.appendChild(script);
    }
  }
}
