export const projets = [
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
    titre: 'Serveroo',
    sousTitre: 'Plateforme d\'hébergement basée sur Kubernetes',
    date: 'Décembre 2022 - Mai 2024',
    description:
      'Projet de fin d\'études réalisé sur deux années autour de la conception d\'une plateforme d\'hébergement basée sur Kubernetes, destinée au déploiement simplifié de services et projets étudiants. ' +
      'Architecture et orchestration de services conteneurisés, supervision de l\'infrastructure et automatisation des déploiements. ' +
      'Participation en tant que Tech Lead à la conception technique, au développement backend et à l\'administration de la plateforme.',
    github: 'https://github.com/Serveroo',
    role: 'Tech Lead',
    technologies: ['Azure', 'Kubernetes', 'Fastify', 'Nginx', 'Node.js', 'Linux', 'React', 'Grafana']
  },
  {
    titre: 'Réalisation d\'une investigation Forensic',
    sousTitre: 'Cours de Forensic',
    date: 'Mars 2023',
    description: 'Réalisation d\'une investigation à partir d\'une image de clé USB et d\'une capture réseau, ' +
      'avec par la suite la réalisation d\'un rapport complet.',
    github: '',
    role: '',
    technologies: ['VirtualBox', 'Kali Linux']
  },
  {
    titre: 'Snort',
    sousTitre: 'Projet de 4ème année',
    date: 'Janvier 2023 - Mars 2023',
    description: 'Mise en place d\'un système de détection d\'intrusion avec Snort.',
    github: '',
    role: '',
    technologies: ['VirtualBox', 'Ubuntu', 'Snort']
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
  {
    titre: 'Proxy HTTP d\'authentification',
    sousTitre: 'Projet de programmation réseau',
    date: 'Janvier 2023 - Mars 2023',
    description: 'Réalisation d\'un proxy HTTP d\'authentification en C.',
    github: '',
    role: '',
    technologies: ['C', 'Visual Studio Code', 'Linux']
  },
];
