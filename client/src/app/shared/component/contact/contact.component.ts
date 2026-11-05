import {Component, ChangeDetectionStrategy} from '@angular/core';
import {contact} from '../../informations/contact';
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonIcon, IonRow} from '@ionic/angular';
import {addIcons} from 'ionicons';
import {link, logoGithub, logoLinkedin, mailOutline} from 'ionicons/icons';

addIcons({link, logoGithub, logoLinkedin, mailOutline});

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonIcon, IonRow]
})
export class ContactComponent {
  public contact = contact;
  public affiche: string[] = [];

  constructor() {
  }

  testMailOrTel(texte: string) {
    return ['Téléphone', 'Mail'].find(el => el === texte);
  }

  // fonction pour faire une pause
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // au clic, on enlève les lettres, puis on met les nouvelles
  async click(event: Event, texte: string) {
    const cible = event.target as HTMLElement;
    if (!this.affiche.includes(texte)) {
      this.affiche.push(texte);

      // on enlève les lettres
      let taille = cible.innerHTML.length;
      const tempsSuppression = 2000 / (taille + 50);
      cible.innerHTML += ' |';
      for (let i = 0; i < taille; i++) {
        cible.innerHTML = cible.innerHTML.substring(0, cible.innerHTML.length - 3) + ' |';
        await this.delay(tempsSuppression);
      }

      // on met les nouvelles lettres
      const tempsAjout = 2000 / (texte.length + 50);
      taille = texte.length;
      for (let i = 0; i < taille; i++) {
        cible.innerHTML = cible.innerHTML.slice(0, i) + texte[i] + cible.innerHTML.slice(i);
        await this.delay(tempsAjout);
      }

      // on enlève le |
      cible.innerHTML = cible.innerHTML.substring(0, cible.innerHTML.length - 2);
    }
  }

}
