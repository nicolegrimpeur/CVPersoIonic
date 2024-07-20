import {Injectable} from '@angular/core';
import {colorIcon} from "../colorIcon";

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

  // permet d'obtenir la couleur d'une icône à partir de son nom
  getColorFromText(nom: string) {
    const icon = colorIcon.find(icon => icon.name === nom);
    return icon !== undefined ? (icon.color !== '-' ? icon.color : '181717') : '181717';
  }
}
