import {Component} from '@angular/core';
import {contact} from '../../informations/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public contact = contact;
  public affiche = [];

  constructor() {
  }

  testMailOrTel(texte: string) {
    return ['Téléphone', 'Mail'].find(el => el === texte);
  }

  // fonction pour faire une pause
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // au clic, on enlève les lettres, puis on met les nouvelles
  async click(event, texte: string) {
    if (!this.affiche.includes(texte)) {
      this.affiche.push(texte);

      // on enlève les lettres
      let taille = event.target.innerHTML.length;
      const tempsSuppression = 2000 / (taille + 50);
      event.target.innerHTML += ' |';
      for (let i = 0; i < taille; i++) {
        event.target.innerHTML = event.target.innerHTML.substring(0, event.target.innerHTML.length - 3) + ' |';
        await this.delay(tempsSuppression);
      }

      // on met les nouvelles lettres
      const tempsAjout = 2000 / (texte.length + 50);
      taille = texte.length;
      for (let i = 0; i < taille; i++) {
        event.target.innerHTML = event.target.innerHTML.slice(0, i) + texte[i] + event.target.innerHTML.slice(i);
        await this.delay(tempsAjout);
      }

      // on enlève le |
      event.target.innerHTML = event.target.innerHTML.substring(0, event.target.innerHTML.length - 2);
    }
  }

}
