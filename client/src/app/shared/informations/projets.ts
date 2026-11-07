export const projets = [
  {
    titre: 'SecretLink',
    sousTitre: 'Partage de secrets par lien à usage unique',
    date: 'Octobre 2025 - Aujourd\'hui',
    description:
      'Conçu et développé seul, un service open source et auto-hébergeable pour remplacer l\'envoi de mots de passe par mail ou messagerie. ' +
      'Chiffrement optionnel dans le navigateur, tableau de bord avec révocation des liens, comptes utilisateurs et tokens d\'accès personnels (PAT), API REST et extension Chrome. ' +
      'Développé avec l\'IA comme assistant et auditeur, chaque ligne relue ; tests et analyses de code publics sur GitHub. ' +
      'Hébergé sur mon infrastructure personnelle, avec supervision via Grafana, Loki et Alloy.',
    github: 'https://github.com/nicolegrimpeur/SecretLink',
    url: 'https://secret.nicob.ovh',
    technologies: ['Docker', 'Angular', 'Node.js', 'MySQL', 'Grafana']
  },
  {
    titre: 'Infrastructure personnelle',
    sousTitre: 'Plateforme auto-hébergée sur Raspberry Pi',
    date: 'Novembre 2020 - Aujourd\'hui',
    description:
      'Conçu et administre une infrastructure personnelle (Raspberry Pi, Dokploy) qui fait tourner mes services web, API et bases de données en production. ' +
      'Sécurisée et supervisée : pare-feu nftables, accès distant par VPN (OpenVPN), monitoring et logs centralisés (Grafana), sauvegardes automatisées sur NAS. ' +
      'Exploitation continue avec déploiements automatisés et maintenance de sécurité.',
    technologies: ['Raspberry Pi', 'Ubuntu', 'Dokploy', 'Docker', 'Traefik Proxy', 'nftables', 'OpenVPN', 'Grafana']
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
