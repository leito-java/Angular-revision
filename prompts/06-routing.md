# Prompt — Étape 6 : pages et routing

```text
Tu es mon mentor Angular. Dans le projet `projets/task-manager`, ajoute une navigation avec Angular Router.

Contexte : application Angular standalone avec un gestionnaire de tâches déjà découpé en composants. Les tâches sont gérées localement.

Objectifs :
1. Créer les pages `/tasks`, `/tasks/new` et `/about`.
2. Rediriger `/` vers `/tasks`.
3. Afficher une barre de navigation accessible et un `router-outlet`.
4. Créer une page `not-found` pour les URL inconnues.
5. Utiliser le lazy loading pour au moins une page.
6. Préparer une route `/tasks/:id/edit` pour modifier une tâche.

Contraintes :
- Utilise `provideRouter` et des composants standalone ; n'introduis pas NgModules.
- Préserve les fonctions existantes.
- Explique routes, paramètres de route, `routerLink`, `router-outlet` et lazy loading avec des mots simples.
- Ajoute ou mets à jour le chapitre `06-routing` : README, exemple, exercice, correction, quiz et erreurs fréquentes.
- Fournis une liste des URL à tester à la fin.
```
