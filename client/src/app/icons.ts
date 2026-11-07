import {addIcons} from 'ionicons';
import {
  checkmarkCircle,
  documentText,
  link,
  logoGithub,
  logoGooglePlaystore,
  logoLinkedin,
  mailOutline
} from 'ionicons/icons';

// Enregistrement de toutes les icônes de l'application.
// Ce fichier est importé dans polyfills.ts (chargé avant main.ts) : les <ion-icon> du HTML
// prérendu sont activées dès le chargement d'@ionic/angular, les icônes doivent déjà être connues.
addIcons({checkmarkCircle, documentText, link, logoGithub, logoGooglePlaystore, logoLinkedin, mailOutline});
