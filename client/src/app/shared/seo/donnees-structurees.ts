import {certificats} from '../informations/certificats';
import {competences} from '../informations/competences';
import {contact} from '../informations/contact';
import {experiencesPro} from '../informations/experiencesPro';
import {formations} from '../informations/formations';

const URL_SITE = 'https://cv.nicob.ovh/';

// Organisme délivrant chaque certificat, à partir du nom du logo
const ORGANISMES: Record<string, string> = {
  openai: 'OpenAI',
  pecb: 'PECB',
  udemy: 'Udemy',
  cambridge: 'Cambridge English',
  voltaire: 'Certificat Voltaire'
};

/**
 * Données structurées schema.org (JSON-LD) décrivant le CV, construites à partir des
 * mêmes informations que le site pour rester synchronisées.
 * Elles sont injectées dans le HTML au prérendu, à destination des moteurs de recherche et des IA.
 * L'adresse mail n'y figure volontairement pas (elle n'est affichée qu'au clic sur le site).
 */
export function donneesStructurees() {
  const posteActuel = experiencesPro[0];

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: URL_SITE,
    inLanguage: 'fr',
    mainEntity: {
      '@type': 'Person',
      name: 'Nicolas Barrat',
      url: URL_SITE,
      image: URL_SITE + 'assets/pdp.jpg',
      jobTitle: posteActuel.titre,
      description: posteActuel.sections?.[0]?.items?.[0],
      worksFor: {
        '@type': 'Organization',
        name: posteActuel.entreprise,
        url: posteActuel.liens?.[0]?.url
      },
      alumniOf: formations.map(formation => ({
        '@type': 'EducationalOrganization',
        name: formation.titre,
        url: formation.url
      })),
      knowsAbout: competences.map(competence => competence.titre),
      hasCredential: certificats
        .filter(certificat => certificat.nomLogo !== 'permis')
        .map(certificat => ({
          '@type': 'EducationalOccupationalCredential',
          name: certificat.description,
          recognizedBy: ORGANISMES[certificat.nomLogo]
            ? {'@type': 'Organization', name: ORGANISMES[certificat.nomLogo]}
            : undefined,
          dateCreated: certificat.date || undefined,
          url: certificat.site || undefined
        })),
      sameAs: contact
        .map(lien => lien.href)
        .filter(href => href.includes('github.com') || href.includes('linkedin.com')),
      subjectOf: {
        '@type': 'DigitalDocument',
        name: 'CV au format PDF',
        encodingFormat: 'application/pdf',
        url: URL_SITE + 'pdf'
      }
    }
  };
}
