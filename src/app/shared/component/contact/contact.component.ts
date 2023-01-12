import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {contact} from '../../informations/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('h5') h5;

  public contact = contact;
  public affiche = [];

  constructor() {
  }

  ngAfterViewInit() {
    const texte = 'Cliquez pour voir les informations';
    for (const el of Array.from(document.getElementsByClassName('text') as HTMLCollectionOf<HTMLElement>)) {
      el.innerHTML = texte;
      el.style.setProperty('--characters', texte.length.toString());
    }
  }

  testMailOrTel(texte: string) {
    return ['Téléphone', 'Mail'].find(el => el === texte);
  }

  // au clic, on enlève les lettres, puis on met les nouvelles
  click(event, texte: string) {
    if (!this.affiche.includes(texte)) {
      this.affiche.push(texte);

      // suppression du texte et ajout de la barre à côté
      event.target.parentElement.classList.add('typewriter-effect-blink');
      event.target.className = 'text-reverse';

      // une fois le texte supprimé, on affiche le nouveau texte
      setTimeout(() => {
        event.target.innerHTML = texte;
        event.target.style.setProperty('--characters', 0);
        event.target.style.setProperty('max-width', 0);
        event.target.style.setProperty('white-space', 'nowrap');
        event.target.className = 'text';
        event.target.style.setProperty('--characters', texte.length.toString());

        // on enlève la barre à côté une fois l'animation terminée
        setTimeout(() => {
          event.target.style.setProperty('max-width', '100%');
          event.target.style.setProperty('white-space', 'normal');
          event.target.parentElement.classList.remove('typewriter-effect-blink');
        }, 2000);
      }, 2000);
    }
  }

}
