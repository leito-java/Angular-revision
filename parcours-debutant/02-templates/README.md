# Étape 02 — Templates Angular

## Objectif

Afficher des données et réagir aux actions de l'utilisateur.

## Interpolation

```ts
title = 'Mes tâches';
```

```html
<h1>{{ title }}</h1>
```

Les doubles accolades affichent une valeur TypeScript dans le HTML.

## Événement

```html
<button (click)="addTask()">Ajouter</button>
```

Les parenthèses écoutent un événement du navigateur.

## Propriété

```html
<button [disabled]="isInvalid">Ajouter</button>
```

Les crochets envoient une valeur TypeScript vers une propriété HTML.

## Conditions et listes

```html
@if (tasks.length === 0) {
  <p>Aucune tâche</p>
}

@for (task of tasks; track task.id) {
  <p>{{ task.title }}</p>
}
```

## Exercice

Affichez trois tâches. Ajoutez un message spécial lorsqu'elles sont toutes terminées.

## Exemple exécutable

```cmd
npm run start:02
```

Le code étudié se trouve dans [`src/etape-02`](../../projets/atelier-debutant/src/etape-02/).

## Je peux continuer si…

- Je connais la différence entre `{{ }}`, `[ ]` et `( )`.
- Je sais utiliser `@if`.
- Je sais parcourir une liste avec `@for`.
- Je comprends pourquoi `track task.id` identifie chaque élément.

## Sources officielles

- [Angular — Liaison de données dans les templates](https://angular.dev/guide/templates/binding)
- [Angular — Contrôle de flux avec `@if` et `@for`](https://angular.dev/guide/templates/control-flow)
