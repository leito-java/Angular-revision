# Angular — Guide de révision et d'apprentissage

[![Angular CI](https://github.com/leito-java/angular-revision/actions/workflows/angular-ci.yml/badge.svg)](https://github.com/leito-java/angular-revision/actions/workflows/angular-ci.yml)

Un dépôt pédagogique pour comprendre Angular, construire des applications modernes et partager des exemples fiables.

> Les versions d'Angular évoluent vite : indiquez toujours la version utilisée dans chaque exemple ou mini-projet.

## Vous débutez complètement ? Commencez ici

Suivez le [`parcours-debutant`](parcours-debutant/README.md). Il introduit une seule notion à la fois :

```text
TypeScript essentiel
→ première application
→ templates
→ composants
→ inputs/outputs
→ signals
→ formulaires
→ lecture du projet complet
```

Utilisez la [fiche de progression](parcours-debutant/PROGRESSION.md) pour vérifier ce que vous savez réellement expliquer et refaire.

Le dossier [`projets/task-manager`](projets/task-manager/README.md) contient le résultat complet. Un débutant ne doit pas commencer par mémoriser tout son code : il le découvre progressivement à travers le parcours.

La [feuille de route du Task Manager](ROADMAP.md) conserve les prochaines évolutions prévues, du routing Angular jusqu'à une éventuelle version SaaS.

Les six premières versions exécutables se trouvent dans l'[atelier débutant](projets/atelier-debutant/README.md).

## Parcours conseillé

| Étape | Thème | Objectif |
|---|---|---|
| 01 | Fondamentaux TypeScript | Types, classes, interfaces, async/await |
| 02 | Démarrage Angular | CLI, structure du projet, composants standalone |
| 03 | Templates | Binding, directives, pipes et contrôle de flux |
| 04 | Composants | Inputs, outputs, cycle de vie et communication |
| 05 | Services et injection | Organisation métier et dependency injection |
| 06 | Routage | Routes, paramètres, guards et lazy loading |
| 07 | Formulaires | Template-driven et Reactive Forms |
| 08 | HTTP et RxJS | HttpClient, observables et intercepteurs |
| 09 | État, tests et performance | Signals, tests unitaires, RxJS et optimisation |
| 10 | Déploiement | Builds et environnements |

## Organisation

```text
parcours-debutant/     # point d'entrée guidé pour une première découverte
01-typescript/
02-demarrage-angular/
03-templates/
04-composants/
05-services-di/
06-routing/
07-formulaires/
08-http-rxjs/
09-etat-performance-tests/
10-deploiement/
projets/
ressources/
```

## Convention pour chaque chapitre

- `README.md` : explication, prérequis et version Angular ;
- `examples/` : exemples ciblés ;
- `exercises/` : énoncés et corrections ;
- `quiz.md` : questions de révision ;
- `common-mistakes.md` : erreurs fréquentes et solutions.

## Thèmes essentiels à ne pas oublier

- Composants, services et directives
- Interpolation, property binding et event binding
- `@Input`, `@Output` et communication entre composants
- Injection de dépendances avec `inject()`
- Routing et chargement différé
- Observable, `async` pipe et erreurs
- Reactive Forms et validation
- Signals et interaction avec RxJS
- Tests de composants et de services

## Contribuer

Les changements passent par une branche dédiée, une Pull Request et une CI verte avant fusion. Consultez le [guide de contribution](CONTRIBUTING.md) pour le workflow Git, les conventions de commits, les vérifications et la Definition of Done.

## Licence

La licence **MIT** est un bon choix par défaut pour une ressource éducative ouverte.
