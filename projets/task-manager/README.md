# Mini-projet — Gestionnaire de tâches

Cette application est le résultat pratique des premières étapes Angular. Avant de lire tout son code, suivez le [`parcours-debutant`](../../parcours-debutant/README.md), qui présente chaque notion séparément.

## Démarrer

Lancez d'abord l'API depuis le dépôt séparé `java-revision`, dans un premier terminal :

```powershell
cd projets/task-manager-api
mvn spring-boot:run
```

Puis lancez Angular dans un second terminal :

```powershell
npm install
npm start
```

Puis ouvrez `http://localhost:4200`.

Le script `npm start` utilise `proxy.conf.json` pour transférer `/api` vers Spring Boot sur le port `8080`.

Si PostgreSQL utilise un autre port, par exemple `5433`, cette différence se configure côté Java avec `DB_URL`. Angular continue à appeler `/api` et n'a pas besoin de connaître le port de la base.

## Vérifier le projet

```powershell
npm test
npm run build
```

`npm test` exécute les tests une fois avec Vitest. Pendant le développement, `npm run test:watch` relance automatiquement les tests après chaque modification. `npm run test:coverage` génère aussi un rapport de couverture.

## Fonctionnalités actuelles

- Naviguer entre une page d’accueil, les tâches et une page « À propos » ;
- Afficher les tâches ;
- Ajouter une tâche ;
- Saisir un titre, une description, une priorité, un statut et une date limite ;
- Valider le titre avec un formulaire réactif ;
- Modifier une tâche ;
- Filtrer les tâches : toutes, à faire, en cours ou terminées ;
- Marquer une tâche comme terminée ;
- Supprimer une tâche ;
- Afficher une page 404 pour une URL inconnue ;
- Charger et enregistrer les tâches avec une API REST Spring Boot ;
- Afficher les états de chargement et d'erreur réseau.

## Pages disponibles

| URL | Rôle |
|---|---|
| `/` | Accueil et résumé |
| `/tasks` | Liste, filtres et actions |
| `/tasks/new` | Création d’une tâche |
| `/tasks/:id/edit` | Modification de la tâche identifiée par `id` |
| `/about` | Explication pédagogique du projet |
| autre URL | Page 404 |

## Notions illustrées

- composants standalone ;
- templates avec `@if` et `@for` ;
- communication avec `input` et `output` ;
- état réactif avec signals ;
- état dérivé avec `computed` ;
- Reactive Forms et validation ;
- routing standalone avec `provideRouter` ;
- navigation avec `routerLink` et `RouterOutlet` ;
- paramètre de route avec `ActivatedRoute` ;
- lazy loading des pages avec `loadComponent` ;
- service partagé injecté avec `TaskStore` ;
- appels REST centralisés avec `TaskApiService` et `HttpClient` ;
- contrat typé partagé avec l'API : `TaskPriority`, `TaskStatus`, `TaskDraft` et `Task` ;
- Observables RxJS transformés en état avec des signals ;
- mises à jour immuables avec `map`, `filter` et l'opérateur `...`.
- tests de composants avec Vitest et Angular `TestBed` ;
- tests de navigation avec `RouterTestingHarness`.

## Lire le code dans le bon ordre

1. `src/main.ts` démarre l’application avec sa configuration.
2. `src/app/app.config.ts` fournit le routeur et `HttpClient`.
3. `src/app/app.routes.ts` associe les URL aux pages.
4. `src/app/app.component.html` contient la coquille, la navigation et `router-outlet`.
5. `src/app/pages/` contient les composants page.
6. `src/app/task-api.service.ts` décrit les appels vers Spring Boot.
7. `src/app/task.store.ts` partage l’état et synchronise les réponses de l'API.
8. `src/app/task-form/`, `task-list/`, `task-item/` et `task-filter/` restent les composants réutilisables.
9. `src/app/app.routes.spec.ts` montre comment tester la navigation.

Le code contient des commentaires pédagogiques. Étudiez le [chapitre guidé Routing](../../parcours-debutant/08-routing/README.md), le chapitre [HTTP et API](../../parcours-debutant/09-http-api/README.md), puis [Faire évoluer un contrat Angular/Java](../../parcours-debutant/10-contrat-api/README.md). Terminez par la [validation full-stack](../../parcours-debutant/11-validation-full-stack/README.md), qui explique comment diagnostiquer et prouver le fonctionnement de toutes les couches. Le code Java, Swagger et la base sont documentés dans `java-revision`.

Les fichiers `*.spec.ts` se trouvent à côté du composant testé, conformément au guide de style Angular.
