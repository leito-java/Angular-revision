# Étape 07 — Comprendre le projet complet

## Objectif

Relier toutes les notions précédentes dans le gestionnaire de tâches.

## Parcours d'une action

Quand l'utilisateur ajoute une tâche :

```text
1. TaskFormComponent valide les champs.
2. Il émet un TaskDraft avec taskSaved.
3. AppComponent reçoit les données dans saveTask.
4. AppComponent met à jour le signal tasks.
5. TaskListComponent reçoit la nouvelle liste.
6. Angular actualise l'écran.
```

Quand l'utilisateur supprime une tâche :

```text
1. TaskItemComponent émet deleted avec l'identifiant.
2. TaskListComponent retransmet l'événement.
3. AppComponent exécute deleteTask.
4. Le signal tasks reçoit un tableau filtré.
5. Angular retire la tâche de l'écran.
```

Quand l'utilisateur choisit un filtre :

```text
1. TaskFilterComponent émet filterChanged.
2. AppComponent met à jour le signal currentFilter.
3. computed recalcule filteredTasks.
4. TaskListComponent reçoit seulement les tâches correspondantes.
```

`computed` représente un état dérivé : il ne stocke pas une deuxième copie de la liste. Il calcule le résultat à partir de `tasks` et `currentFilter`.

## Exercice final

Sans regarder le code, dessinez les composants et les flèches de communication. Ensuite, ajoutez une fonction permettant de filtrer les tâches terminées.

## Questions de validation

- Quel composant possède la liste des tâches ?
- Pourquoi `TaskItemComponent` ne supprime-t-il pas directement une tâche ?
- Comment le formulaire transmet-il ses données ?
- Pourquoi `tasks.update` actualise-t-il l'écran ?
- Où se trouvent les règles de validation ?

## Projet final

Le code complet et commenté se trouve dans [`projets/task-manager`](../../projets/task-manager/README.md).

Pour le lancer :

```cmd
cd projets\task-manager
npm start
```

Une fois cette étape comprise, vous pouvez continuer avec le routing, les services, HTTP et l'API Spring Boot.

## Sources officielles pour continuer

- [Angular — Injection de dépendances](https://angular.dev/guide/di)
- [Angular — Routing](https://angular.dev/guide/routing)
- [Angular — Requêtes HTTP](https://angular.dev/guide/http)
- [Angular — Tests](https://angular.dev/guide/testing)
- [Angular — Guide de style](https://angular.dev/style-guide)
