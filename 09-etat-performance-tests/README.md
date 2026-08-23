# Tests unitaires Angular

## Objectif

Vérifier automatiquement les comportements importants et pouvoir modifier le code avec davantage de confiance.

Le projet utilise **Vitest**, l'outil de test par défaut des nouveaux projets Angular 22, avec `jsdom` pour simuler le DOM.

## Commandes

Depuis `projets/task-manager` :

```cmd
npm test
npm run test:watch
npm run test:coverage
```

- `npm test` lance les tests une seule fois.
- `test:watch` relance les tests après chaque modification.
- `test:coverage` mesure les parties du code exécutées par les tests.

## Structure d'un test

```ts
describe('TaskFilterComponent', () => {
  it('émet le filtre sélectionné', () => {
    // Arrange : préparer le composant.
    // Act : cliquer sur un bouton.
    // Assert : vérifier la valeur émise.
  });
});
```

Cette organisation est appelée **Arrange, Act, Assert** : préparer, agir, vérifier.

## Ce que nous testons

- `TaskFormComponent` : validation et données émises.
- `TaskFilterComponent` : filtre actif et événement émis.
- `TaskItemComponent` : affichage et actions utilisateur.
- `AppComponent` : affichage, filtres et ajout d'une tâche.

Un bon test vérifie un comportement observable. Il évite de dépendre inutilement des détails internes de la classe.

## Source officielle

- [Angular — Tests unitaires](https://angular.dev/guide/testing)
- [Angular — Bases des tests de composants](https://angular.dev/guide/testing/components-basics)
