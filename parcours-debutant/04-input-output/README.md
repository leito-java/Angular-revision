# Étape 04 — Inputs et outputs

## Objectif

Comprendre comment les composants communiquent sans être fortement couplés.

## Input : les données descendent

L'enfant déclare ce qu'il accepte :

```ts
readonly task = input.required<Task>();
```

Le parent transmet la valeur :

```html
<app-task-item [task]="task" />
```

## Output : les événements remontent

L'enfant déclare un événement :

```ts
readonly deleted = output<number>();
```

Il émet l'identifiant lorsqu'un bouton est cliqué :

```ts
this.deleted.emit(this.task().id);
```

Le parent écoute l'événement :

```html
<app-task-item (deleted)="deleteTask($event)" />
```

Règle à retenir :

```text
Données : parent → enfant
Actions : enfant → parent
```

## Exercice

Créez sur papier un composant `ProductItem` qui reçoit un produit et émet son identifiant lorsque l'utilisateur clique sur « Ajouter au panier ».

## Exemple exécutable

```cmd
npm run start:04
```

Le code étudié se trouve dans [`src/etape-04`](../../projets/atelier-debutant/src/etape-04/).

## Erreur fréquente

Faire modifier directement au composant enfant les données appartenant au parent. L'enfant doit plutôt demander l'action avec un output.

## Je peux continuer si…

- Je sais expliquer la différence entre `input` et `output`.
- Je comprends la signification de `[task]` et `(deleted)`.
- Je sais ce que contient `$event`.

## Sources officielles

- [Angular — Recevoir des données avec les inputs](https://angular.dev/guide/components/inputs)
- [Angular — Émettre des événements avec les outputs](https://angular.dev/guide/components/outputs)
