# Exercice — filtrer les tâches par priorité

## Objectif

Ajouter un second filtre local sans modifier le contrat de l'API.

## Travail demandé

1. créez un type `PriorityFilter = 'all' | TaskPriority` ;
2. ajoutez un signal contenant la priorité sélectionnée ;
3. combinez le filtre de statut et le filtre de priorité dans `filteredTasks` ;
4. ajoutez un composant ou un `select` accessible pour choisir la priorité ;
5. vérifiez qu'une tâche doit respecter les deux filtres pour être affichée ;
6. ajoutez au moins deux tests.

## Contraintes

- aucune nouvelle requête HTTP ;
- ne modifiez pas l'interface `Task` ;
- ne dupliquez pas la liste des tâches dans un second signal ;
- conservez `computed` pour produire la liste visible.

## Critères de réussite

- « Toutes les priorités » conserve le comportement actuel ;
- priorité haute et statut en cours peuvent être combinés ;
- changer un filtre actualise immédiatement la liste ;
- les tests et le build restent verts.
