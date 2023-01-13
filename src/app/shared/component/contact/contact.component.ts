import {AfterViewInit, Component} from '@angular/core';
import {contact} from '../../informations/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  public contact = contact;
  public affiche = [];

  constructor() {
  }

  ngAfterViewInit() {
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
      const tempsSuppression = 2000 / (event.target.innerHTML.length + 50);
      for (const lettre of event.target.innerHTML) {
        event.target.innerHTML = event.target.innerHTML.substring(0, event.target.innerHTML.length - 1);
        await this.delay(tempsSuppression);
      }

      // on met les nouvelles lettres
      const tempsAjout = 2000 / (texte.length + 50);
      for (const lettre of texte) {
        event.target.innerHTML += lettre;
        await this.delay(tempsAjout);
      }
    }
  }

}
