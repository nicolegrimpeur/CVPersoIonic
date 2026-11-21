/**
 * Date de dernière mise à jour du contenu du CV, au format AAAA-MM-JJ.
 * À modifier à la main à chaque changement de contenu (informations, PDF...).
 * Affichée dans le pied de page et reprise dans les données structurées (dateModified).
 */
export const dateMiseAJour = '2026-11-21';

const MOIS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
];

/** Date de mise à jour au format « novembre 2026 » */
export function dateMiseAJourAffichee(): string {
  const [annee, mois] = dateMiseAJour.split('-');
  return `${MOIS[Number(mois) - 1]} ${annee}`;
}
