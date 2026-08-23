# Intégration continue avec GitHub Actions

La CI vérifie automatiquement le dépôt après chaque push sur `main` et chaque pull request vers `main`.

Le workflow `.github/workflows/angular-ci.yml` lance deux tâches indépendantes :

```text
Task Manager
→ npm ci
→ npm test
→ npm run build

Atelier débutant
→ npm ci
→ npm run build:all
```

## Pourquoi `npm ci` ?

`npm ci` installe exactement les versions enregistrées dans `package-lock.json`. Cette commande est adaptée aux environnements automatisés et échoue si le manifeste et le verrou ne correspondent pas.

## Lire le résultat

Dans GitHub, ouvrez l'onglet **Actions** puis le workflow **Angular CI** :

- vert : tous les tests et builds réussissent ;
- rouge : une commande a échoué ;
- jaune : le workflow est encore en cours.

Une CI réussie ne remplace pas la revue de code, mais empêche de nombreuses régressions d'arriver silencieusement sur la branche principale.

## Source officielle

- [GitHub — Construire et tester avec Node.js](https://docs.github.com/actions/use-cases-and-examples/building-and-testing/building-and-testing-nodejs)
- [Angular — Tests en intégration continue](https://angular.dev/guide/testing#testing-in-continuous-integration)
