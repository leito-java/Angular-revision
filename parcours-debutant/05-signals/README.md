# Étape 05 — Signals

## Objectif

Gérer un état qui met automatiquement l'interface à jour.

## Créer et lire un signal

```ts
count = signal(0);
```

Un signal se lit comme une fonction :

```ts
console.log(this.count());
```

## Modifier un signal

```ts
this.count.set(10);
this.count.update(value => value + 1);
```

Dans le projet :

```ts
tasks = signal<Task[]>([]);

this.tasks.update(tasks => [
  ...tasks,
  newTask,
]);
```

Angular détecte le changement et actualise les templates qui lisent `tasks()`.

## Pourquoi créer un nouveau tableau ?

`[...tasks, newTask]` produit un nouveau tableau. Cette mise à jour immuable est plus prévisible que la modification directe de l'ancien tableau.

## Exercice

Créez un signal `score`, puis trois méthodes : ajouter un point, retirer un point et remettre le score à zéro.

## Exemple exécutable

```cmd
npm run start:05
```

Le code étudié se trouve dans [`src/etape-05`](../../projets/atelier-debutant/src/etape-05/).

## Erreur fréquente

Oublier les parenthèses lors de la lecture : `tasks` désigne le signal, tandis que `tasks()` désigne sa valeur.

## Je peux continuer si…

- Je sais créer, lire et modifier un signal.
- Je connais la différence entre `set` et `update`.
- Je comprends pourquoi l'interface change après la mise à jour du signal.

## Source officielle

- [Angular — Signals](https://angular.dev/guide/signals)
