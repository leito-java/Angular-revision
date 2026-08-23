# Étape 03 — Découper en composants

## Objectif

Éviter un composant géant en donnant une responsabilité à chaque composant.

Le gestionnaire de tâches est organisé ainsi :

```text
AppComponent
├── TaskFormComponent   saisie d'une tâche
└── TaskListComponent   affichage de la liste
    └── TaskItemComponent   affichage d'une tâche
```

Chaque composant possède sa classe, son template et ses styles :

```text
task-item.component.ts
task-item.component.html
task-item.component.css
```

Un composant standalone importe directement les composants qu'il utilise :

```ts
@Component({
  imports: [TaskItemComponent],
})
```

## Exercice

Imaginez une page de boutique. Proposez un découpage avec `ProductList`, `ProductItem` et `Cart`, puis écrivez la responsabilité de chacun en une phrase.

## Exemple exécutable

```cmd
npm run start:03
```

Le code étudié se trouve dans [`src/etape-03`](../../projets/atelier-debutant/src/etape-03/).

## Erreur fréquente

Créer un composant pour chaque balise HTML. Un composant doit représenter une responsabilité ou un élément réutilisable, pas seulement réduire le nombre de lignes.

## Je peux continuer si…

- Je sais expliquer la responsabilité de chaque composant du projet.
- Je comprends pourquoi `TaskItemComponent` ne gère pas toute la liste.
- Je sais ce que signifie « composant standalone ».

## Source officielle

- [Angular — Composants](https://angular.dev/guide/components)
