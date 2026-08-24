# Contribuer

Merci de contribuer à rendre ce parcours clair, fiable et accessible aux développeurs juniors.

## Principes du projet

- Une fonctionnalité doit résoudre un besoin clairement décrit.
- Une étape pédagogique introduit une seule notion principale à la fois.
- Le code doit rester lisible avant d'être astucieux.
- Les règles métier ne doivent pas dépendre inutilement de l'interface.
- Toute évolution importante doit être testée et documentée.
- Les sources externes sont citées ; aucun contenu protégé n'est copié.

## Workflow Git obligatoire

Ne poussez pas de nouvelle fonctionnalité directement sur `main`.

1. Mettez `main` à jour.
2. Créez une branche dédiée.
3. Réalisez un changement cohérent et limité.
4. Exécutez les vérifications locales.
5. Créez un commit explicite.
6. Poussez la branche et ouvrez une Pull Request.
7. Fusionnez seulement lorsque la CI est verte et la checklist terminée.

Installez une fois l'outillage Git depuis la racine du dépôt :

```cmd
npm install
```

Cette commande active les hooks Husky. Avant chaque commit, le nom de la branche est vérifié. Au moment du commit, Commitlint refuse automatiquement un message qui ne respecte pas la convention.

```bash
git switch main
git pull --ff-only origin main
git switch -c feat/nom-court

# Après les modifications et les tests
git add chemin/du/fichier
git commit -m "feat: décrire clairement la fonctionnalité"
git push -u origin feat/nom-court
```

## Nommage des branches

| Préfixe | Utilisation | Exemple |
|---|---|---|
| `feat/` | Nouvelle fonctionnalité | `feat/angular-routing` |
| `fix/` | Correction d'un bug | `fix/form-validation` |
| `docs/` | Documentation uniquement | `docs/reactive-forms` |
| `test/` | Ajout ou correction de tests | `test/task-service` |
| `refactor/` | Restructuration sans changement fonctionnel | `refactor/task-state` |
| `chore/` | Outils, dépendances ou processus | `chore/professional-workflow` |
| `ci/` | Workflows d'intégration ou déploiement | `ci/validate-commits` |
| `build/` | Système de build ou dépendances | `build/update-angular` |
| `perf/` | Amélioration mesurable des performances | `perf/task-list` |
| `style/` | Formatage sans changement fonctionnel | `style/format-docs` |

Utilisez des noms courts, en minuscules et séparés par des tirets.

## Convention des commits

Le projet utilise des messages inspirés de Conventional Commits :

```text
feat: ajouter la page de création
fix: corriger la validation du titre
docs: expliquer les paramètres de route
test: couvrir le mode modification
refactor: isoler la gestion des tâches
chore: mettre à jour la configuration CI
ci: vérifier les noms de branches
build: mettre à jour Angular
perf: réduire les recalculs de la liste
style: uniformiser le formatage
```

Un commit doit représenter une intention principale. N'ajoutez pas `.` sans vérifier préalablement les fichiers concernés avec `git status`.

Le titre d'une Pull Request respecte la même convention, car il peut devenir le message final lors d'une fusion par squash.

Les hooks locaux peuvent techniquement être contournés. La CI répète donc les contrôles et constitue la source de vérité avant fusion.

## Vérifications locales

Pour le Task Manager :

```cmd
cd projets\task-manager
npm ci
npm test
npm run build
```

Pour les six étapes exécutables :

```cmd
cd projets\atelier-debutant
npm ci
npm run build:all
```

Une modification de documentation doit aussi conserver des liens relatifs valides et une progression compréhensible sans connaissance implicite.

## Pull Requests

Une Pull Request doit :

- expliquer le problème et la solution ;
- rester assez petite pour être relue facilement ;
- référencer l'issue associée lorsqu'elle existe ;
- indiquer les commandes de vérification exécutées ;
- fournir une capture pour un changement visuel ;
- signaler les risques, limites ou travaux reportés.

Le modèle affiché automatiquement lors de la création d'une Pull Request doit être entièrement rempli.

## Definition of Done

Une évolution est terminée uniquement lorsque :

- [ ] les critères d'acceptation sont satisfaits ;
- [ ] le code compile sans erreur ;
- [ ] les tests utiles existent et réussissent ;
- [ ] les fonctionnalités existantes ne sont pas cassées ;
- [ ] la documentation et les exercices sont à jour ;
- [ ] un junior peut comprendre la notion sans dépendre du code futur ;
- [ ] aucun secret, fichier généré ou donnée personnelle n'est ajouté ;
- [ ] la Pull Request est lisible et la CI est verte ;
- [ ] les changements ont été fusionnés dans `main` ;
- [ ] une version pédagogique stable est marquée par un tag lors d'un jalon important.

## Versions Angular

Indiquez la version Angular utilisée dans les exemples et vérifiez les comportements susceptibles d'avoir évolué dans la documentation officielle. Les conventions et vérifications Java appartiennent au dépôt séparé `java-revision`.
