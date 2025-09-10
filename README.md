# Projet de CV personnel en ligne

## Description

Réalisation d'un CV en ligne, complet et fonctionnel, accessible sur ordinateur et téléphone.

## Technologies utilisées

![Ionic](https://img.shields.io/badge/Ionic-3880FF?logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)
![Typescript](https://img.shields.io/badge/Typescript-3178C6?logo=typescript&logoColor=white)

---

## Installation & lancement de l'environnement de développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement (port par défaut : 8100)
npm start
````

L’application sera accessible sur [http://localhost:8100](http://localhost:8100).

## Build

Pour générer une version optimisée de l’application (avec un `base-href` configuré pour `/cv/`) :

```bash
npm run build
```

Les fichiers de build sont générés dans le dossier `www/` (par défaut avec Ionic + Angular).

---

## Tests end-to-end

Les tests end-to-end sont réalisés avec **Cypress** (les anciens tests Protractor ne sont plus utilisés).

### Lancer les tests

Avant de lancer Cypress, il faut démarrer l’application en local :

```bash
npm start
```

Puis, dans une autre console :

```bash
npm run e2e
```

### Notes

* Les tests ciblent l’URL `http://localhost:8100`
* La configuration Cypress se trouve dans le dossier `cypress/`

---

## Scripts utiles

* `npm start` : démarre le serveur de développement
* `npm run build` : build de l’application en production (avec `base-href=/cv/`)
* `npm run e2e` : exécute les tests end-to-end avec Cypress
