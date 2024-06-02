import * as icons from "simple-icons";
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Badge {
  constructor() {
  }

  // permet d'obtenir le lien de l'image
  getLink(nom: string) {
    return 'https://img.shields.io/badge/' + nom + '-' + this.getColorFromText(nom) + '?logo=' + this.getLogoFromText(nom) + '&logoColor=white';
  }

  // permet d'obtenir le long d'un logo à partir de son nom
  getLogoFromText(nom: string) {
    nom = nom.toLowerCase();
    nom = nom.replaceAll('+', 'plus');
    return nom;
  }

  // permet d'obtenir le nom d'une icône à partir de son nom
  getNomIconsFromText(nom: string) {
    nom = this.getLogoFromText(nom);
    nom = nom.replaceAll(' ', '');
    nom = nom.replaceAll('.', 'dot');
    return nom.slice(0, 1).toUpperCase() + nom.slice(1, nom.length).toLowerCase();
  }

  // permet d'obtenir la couleur d'une icône à partir de son nom
  getColorFromText(nom: string) {
    const icon = icons['si' + this.getNomIconsFromText(nom)];
    return icon !== undefined ? icon.hex : '181717';
  }
}
