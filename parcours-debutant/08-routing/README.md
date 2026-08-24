# Étape 08 — Pages et routing Angular

> Exemple vérifié avec Angular 22.

## Objectif

Transformer le Task Manager en application composée de plusieurs pages, chacune avec sa propre URL, sans recharger tout le navigateur.

À la fin, vous saurez :

- déclarer des routes dans une application standalone ;
- afficher une page avec `RouterOutlet` ;
- naviguer avec `routerLink` ;
- lire un paramètre comme `:id` ;
- charger une page à la demande avec `loadComponent` ;
- gérer une URL inconnue avec `**` ;
- tester la navigation avec `RouterTestingHarness`.

## Le modèle mental

```text
URL demandée
    ↓
tableau routes
    ↓
route correspondante
    ↓
composant affiché dans <router-outlet>
```

Une **route** est une règle. Une **page** est simplement un composant Angular choisi par cette règle.

## Les trois éléments essentiels

### 1. Déclarer les routes

`app.routes.ts` contient les chemins :

```ts
export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'tasks',
    loadComponent: () => import('./task-list-page.component')
      .then((module) => module.TaskListPageComponent),
  },
  { path: '**', component: NotFoundPageComponent },
];
```

Consultez aussi l’[exemple minimal complet](examples/app.routes.ts).

### 2. Fournir le routeur

Dans une application standalone, `app.config.ts` enregistre le routeur :

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
```

`main.ts` transmet ensuite cette configuration à `bootstrapApplication`.

### 3. Afficher la page active

La coquille commune contient la navigation et la sortie du routeur :

```html
<a routerLink="/tasks">Tâches</a>
<router-outlet />
```

`routerLink` navigue côté client. `router-outlet` indique où Angular doit rendre la page choisie.

## Les routes du Task Manager

| URL | Page | Notion |
|---|---|---|
| `/` | accueil | route par défaut |
| `/tasks` | liste | page chargée à la demande |
| `/tasks/new` | création | URL dédiée au formulaire |
| `/tasks/:id/edit` | modification | paramètre dynamique `id` |
| `/about` | à propos | page pédagogique |
| toute autre URL | 404 | wildcard `**` |

Les routes précises se placent avant les routes dynamiques ou générales. La route `**` reste toujours en dernier, car Angular choisit la première route compatible.

## Lire le paramètre `:id`

Dans `/tasks/2/edit`, `2` est la valeur de `id`. `ActivatedRoute` donne accès aux paramètres :

```ts
private readonly route = inject(ActivatedRoute);
private readonly paramMap = toSignal(this.route.paramMap, {
  initialValue: this.route.snapshot.paramMap,
});

readonly taskId = computed(() => Number(this.paramMap().get('id')));
```

`paramMap` est un Observable du routeur. `toSignal` permet de le relier aux signals Angular déjà étudiés.

## Pourquoi ajouter un store partagé ?

Avant le routing, `AppComponent` possédait les tâches et affichait directement ses enfants. Après le découpage, la liste et le formulaire sont deux pages séparées.

```text
HomePage ───────┐
TaskListPage ───┼──> TaskStore ──> signal des tâches
TaskFormPage ───┘
```

`TaskStore` devient la source de vérité partagée. Il garde l’état privé et expose `createTask`, `updateTask`, `toggleTask` et `deleteTask`.

## Lire le code dans le bon ordre

1. `src/main.ts` : démarrage avec la configuration.
2. `src/app/app.config.ts` : enregistrement du routeur.
3. `src/app/app.routes.ts` : association entre URLs et pages.
4. `src/app/app.component.html` : navigation et `router-outlet`.
5. `src/app/pages/` : composants représentant les pages.
6. `src/app/task.store.ts` : état commun aux pages.
7. `src/app/app.routes.spec.ts` : tests de navigation.

## Tester une route

```ts
TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
const harness = await RouterTestingHarness.create();

await harness.navigateByUrl('/tasks/2/edit', TaskFormPageComponent);

expect(harness.routeNativeElement?.querySelector('#task')).not.toBeNull();
```

Le Task Manager vérifie l’accueil, la liste, le paramètre d’édition et la page 404.

## Pratiquer

1. Faites l’[exercice : ajouter une page Aide](exercises/01-ajouter-page-aide.md).
2. Comparez avec la [correction expliquée](solutions/01-ajouter-page-aide.md).
3. Répondez au [quiz](quiz.md).
4. Relisez les [erreurs fréquentes](mistakes.md).

## Je peux continuer si…

- je peux expliquer le trajet URL → route → composant → `router-outlet` ;
- je sais créer une route statique et une route avec paramètre ;
- je sais expliquer le rôle de `TaskStore` entre plusieurs pages ;
- je peux tester une navigation sans ouvrir manuellement le navigateur.

## Sources officielles

- [Angular — Routing](https://angular.dev/guide/routing)
- [Angular — Read route state](https://angular.dev/guide/routing/read-route-state)
- [Angular — Testing routing and navigation](https://angular.dev/guide/routing/testing)
