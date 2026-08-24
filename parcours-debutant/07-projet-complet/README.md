# Étape 07 — Comprendre le projet complet

## Objectif

Relier toutes les notions précédentes dans le gestionnaire de tâches.

## Parcours d'une action

Quand l'utilisateur ajoute une tâche :

```text
1. TaskFormComponent valide les champs.
2. Il émet un TaskDraft avec taskSaved.
3. TaskFormPageComponent reçoit les données dans saveTask.
4. La page demande à TaskStore de créer la tâche.
5. TaskStore met à jour son signal privé.
6. Le routeur revient vers /tasks.
7. TaskListPageComponent lit la liste actualisée.
```

Quand l'utilisateur supprime une tâche :

```text
1. TaskItemComponent émet deleted avec l'identifiant.
2. TaskListComponent retransmet l'événement.
3. TaskListPageComponent demande la suppression à TaskStore.
4. Le signal privé du store reçoit un tableau filtré.
5. Angular retire la tâche de l'écran.
```

Quand l'utilisateur choisit un filtre :

```text
1. TaskFilterComponent émet filterChanged.
2. TaskListPageComponent met à jour le signal currentFilter.
3. Son computed recalcule filteredTasks.
4. TaskListComponent reçoit seulement les tâches correspondantes.
```

`TaskStore` est la source de vérité partagée par les pages. Son état reste privé : les composants le lisent et demandent une modification par une méthode publique.

`computed` représente un état dérivé : il ne stocke pas une deuxième copie de la liste. Il calcule le résultat à partir des tâches du store et de `currentFilter`.

## Exercice final

Sans regarder le code, dessinez les composants et les flèches de communication. Ensuite, ajoutez une fonction permettant de filtrer les tâches terminées.

## Questions de validation

- Quelle classe possède la source de vérité des tâches ?
- Pourquoi `TaskItemComponent` ne supprime-t-il pas directement une tâche ?
- Comment le formulaire transmet-il ses données ?
- Pourquoi le signal du store actualise-t-il plusieurs pages ?
- Où se trouvent les règles de validation ?

## Projet final

Le code complet et commenté se trouve dans [`projets/task-manager`](../../projets/task-manager/README.md).

Pour le lancer :

```cmd
cd projets\task-manager
npm start
```

Une fois cette étape comprise, continuez avec l’[étape 08 — Pages et routing](../08-routing/README.md), puis HTTP et l’API Spring Boot.

## Sources officielles pour continuer

- [Angular — Injection de dépendances](https://angular.dev/guide/di)
- [Angular — Routing](https://angular.dev/guide/routing)
- [Angular — Requêtes HTTP](https://angular.dev/guide/http)
- [Angular — Tests](https://angular.dev/guide/testing)
- [Angular — Guide de style](https://angular.dev/style-guide)
