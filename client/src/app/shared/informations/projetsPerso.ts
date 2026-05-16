export const projetsPerso = [
  {
    titre: 'Infrastructure personnelle',
    sousTitre: 'Plateforme auto-hébergée sur Raspberry Pi',
    date: 'Novembre 2020 - Aujourd\'hui',
    description:
      'Conception et administration d\'une infrastructure auto-hébergée, utilisée pour héberger plusieurs services web, API et bases de données pour des projets personnels. ' +
      'Mise en place d\'un environnement sécurisé et supervisé avec monitoring, centralisation des logs, sauvegardes automatisées sur NAS et durcissement réseau. ' +
      'Exploitation continue avec automatisation des déploiements et maintenance de sécurité.',
    technologies: ['Ubuntu', 'Dokploy', 'Docker', 'Traefik Proxy', 'nftables', 'Grafana']
  },
  {
    titre: 'SecretLink',
    sousTitre: 'Plateforme sécurisée de partage de secrets à usage unique',
    date: 'Octobre 2025 - Aujourd\'hui',
    description:
      'Conception et développement d\'une plateforme sécurisée permettant le partage temporaire de données sensibles via des liens à usage unique. ' +
      'Implémentation d\'un système de chiffrement de bout en bout, de gestion des comptes utilisateurs et de tokens d\'accès personnels (PAT), ainsi qu\'une API REST pour l\'automatisation des échanges. ' +
      'Déploiement et exploitation sur infrastructure auto-hébergée avec supervision complète via Grafana, Loki et Alloy.',
    github: 'https://github.com/nicolegrimpeur/SecretLink',
    url: 'https://secret.nicob.ovh',
    technologies: ['Docker', 'Angular', 'Node.js', 'MySQL', 'Grafana']
  },
  {
    titre: 'All Plannings',
    sousTitre: 'Système de planning pour les résidences du All',
    date: 'Août 2021 - Septembre 2024',
    description: 'Réalisation d\'un site Web et d\'une application mobile pour les plannings des laveries des résidences ' +
      'de l\'association All, tous les services de la vie étudiante. Les étudiants peuvent alors s\'inscrire sur les plannings ' +
      'des machines à laver, sèches linges et aspirateur de leur résidence, et les responsables de résidence peuvent les administrer. ' +
      'En production, montée de version des frameworks utilisés.',
    github: 'https://github.com/nicolegrimpeur/Plannings',
    url: '',
    playStore: '',
    technologies: ['Ionic', 'Angular', 'TypeScript', 'Android Studio', 'Firebase']
  },
  {
    titre: 'All Résidences',
    sousTitre: 'Informations concernant les résidences du All',
    date: 'Juillet 2021 - Septembre 2024',
    description:
      'Ensemble d\'informations pour les étudiants des résidences de l\'association ' +
      'All, tous les services de la vie étudiante, avec un site Web ainsi qu\'une application ' +
      'Android disponible sur le Google Play Store. ' +
      'En production, montée de version des frameworks utilisés.',
    github: 'https://github.com/nicolegrimpeur/appAll',
    url: '',
    playStore: '',
    technologies: ['Ionic', 'Angular', 'TypeScript', 'Android Studio']
  },
];
