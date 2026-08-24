# Étape 09 — Consommer une API avec Angular

Cette étape utilise Angular 22 pour remplacer les données temporaires du navigateur par des appels HTTP. L'API Spring Boot reste dans le dépôt séparé `java-revision`.

## Objectif

Comprendre la partie frontend du trajet d'une tâche :

```text
clic dans un composant
→ TaskStore
→ TaskApiService
→ HttpClient
→ API Java distante
→ réponse JSON
→ mise à jour du signal
→ nouvel affichage
```

Angular ne connaît ni l'entité JPA, ni le repository, ni la base de données. Il connaît uniquement le contrat HTTP : URL, méthodes, données envoyées et réponses reçues.

## Les responsabilités Angular

| Élément | Responsabilité |
|---|---|
| `provideHttpClient()` | Rendre `HttpClient` injectable |
| `TaskApiService` | Centraliser les URL et méthodes HTTP |
| `TaskStore` | Transformer les réponses en état d'interface |
| Composants page | Afficher chargement, erreur et contenu |
| `proxy.conf.json` | Transférer `/api` vers le serveur local |

Un composant ne doit pas construire lui-même une URL ni appeler directement `HttpClient`. Ce découpage réduit le couplage et simplifie les tests.

## Les méthodes utilisées

| Besoin Angular | Méthode | URL |
|---|---|---|
| Charger la liste | `GET` | `/api/tasks` |
| Charger une tâche | `GET` | `/api/tasks/{id}` |
| Créer | `POST` | `/api/tasks` |
| Modifier | `PUT` | `/api/tasks/{id}` |
| Supprimer | `DELETE` | `/api/tasks/{id}` |

Les détails d'implémentation de ces routes sont enseignés dans `java-revision`.

## Observable, simplement

`HttpClient` retourne un `Observable`. Il représente une réponse qui arrivera plus tard.

```ts
this.api.getTasks().subscribe({
  next: (tasks) => this.taskState.set(tasks),
  error: (error) => this.reportError(error),
});
```

- `next` reçoit une réponse réussie ;
- `error` reçoit un échec ;
- sans abonnement, la requête n'est pas envoyée.

Le pipe `async` est pratique lorsqu'un template affiche directement un Observable. Dans ce projet, le store convertit la réponse en signals : l'abonnement reste donc à la frontière HTTP.

## Configurer HttpClient

Dans une application standalone :

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideRouter(routes)],
};
```

L'injection suivante devient ensuite possible :

```ts
private readonly http = inject(HttpClient);
```

## Pourquoi un proxy ?

Angular fonctionne sur le port `4200` et l'API locale sur `8080`. Le fichier `proxy.conf.json` transfère les URL commençant par `/api` vers le backend.

Le code Angular garde ainsi une URL relative :

```ts
private readonly endpoint = '/api/tasks';
```

Le script `npm start` active automatiquement ce proxy.

## Gérer l'état de l'écran

Trois états sont indispensables :

1. `loading` pendant la requête ;
2. les données après une réussite ;
3. `error` après un échec.

Une erreur réseau ne doit pas laisser une page blanche. Le Task Manager affiche un message et un bouton « Réessayer ».

## Tester sans le vrai backend

`HttpTestingController` intercepte la requête dans un test :

```ts
service.getTasks().subscribe((tasks) => expect(tasks).toEqual(expected));

const request = http.expectOne('/api/tasks');
expect(request.request.method).toBe('GET');
request.flush(expected);
```

Le test reste rapide et ne dépend pas du dépôt Java.

## Démarrer l'application complète

1. Dans le dépôt `java-revision`, lancez `projets/task-manager-api` sur le port `8080`.
2. Dans ce dépôt Angular :

```powershell
cd projets/task-manager
npm install
npm start
```

3. Ouvrez `http://localhost:4200`.

## Lire le code dans le bon ordre

1. `src/app/app.config.ts` ;
2. `src/app/task-api.service.ts` ;
3. `src/app/task.store.ts` ;
4. `src/app/pages/task-list-page/` ;
5. `src/app/pages/task-form-page/` ;
6. `src/app/task-api.service.spec.ts`.

## Pratiquer

1. Faites l'[exercice sur une erreur HTTP](exercises/01-tester-erreur-http.md).
2. Comparez ensuite avec la [correction](solutions/01-tester-erreur-http.md).
3. Répondez au [quiz](quiz.md).
4. Consultez les [erreurs fréquentes](mistakes.md).

## Je peux continuer si…

- je sais fournir et injecter `HttpClient` ;
- je comprends le rôle de `TaskApiService` ;
- je peux expliquer Observable et abonnement ;
- je sais afficher chargement, erreur et liste vide ;
- je peux tester un appel HTTP sans démarrer Java.

## Sources officielles

- [Angular — HTTP Client](https://angular.dev/guide/http)
- [Angular — Testing HTTP requests](https://angular.dev/guide/http/testing)
- [RxJS — Observable](https://rxjs.dev/guide/observable)
