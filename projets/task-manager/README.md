# Mini-projet — Gestionnaire de tâches

Cette application est le résultat pratique des premières étapes Angular. Avant de lire tout son code, suivez le [`parcours-debutant`](../../parcours-debutant/README.md), qui présente chaque notion séparément.

## Démarrer

Après avoir installé Node.js LTS, exécutez :

```powershell
npm install
npm start
```

Puis ouvrez `http://localhost:4200`.

## Vérifier le projet

```powershell
npm test
npm run build
```

`npm test` exécute les tests une fois avec Vitest. Pendant le développement, `npm run test:watch` relance automatiquement les tests après chaque modification. `npm run test:coverage` génère aussi un rapport de couverture.

## Fonctionnalités actuelles

- Afficher les tâches ;
- Ajouter une tâche ;
- Choisir une priorité ;
- Valider le titre avec un formulaire réactif ;
- Modifier une tâche ;
- Filtrer les tâches : toutes, en cours ou terminées ;
- Marquer une tâche comme terminée ;
- Supprimer une tâche.

## Notions illustrées

- composants standalone ;
- templates avec `@if` et `@for` ;
- communication avec `input` et `output` ;
- état réactif avec signals ;
- état dérivé avec `computed` ;
- Reactive Forms et validation ;
- mises à jour immuables avec `map`, `filter` et l'opérateur `...`.
- tests de composants avec Vitest et Angular `TestBed`.

Le code contient des commentaires pédagogiques. Commencez la lecture par `src/app/app.component.ts`, puis suivez les composants enfants.

Les fichiers `*.spec.ts` se trouvent à côté du composant testé, conformément au guide de style Angular.
