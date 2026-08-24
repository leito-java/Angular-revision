# Quiz — HttpClient et Observable

1. Où fournit-on `HttpClient` dans une application standalone ?
2. Quel est le rôle de `TaskApiService` ?
3. Une requête `HttpClient` est-elle envoyée sans abonnement ?
4. Pourquoi utiliser une URL relative `/api/tasks` ?
5. Quels sont les trois états essentiels d'un écran connecté ?
6. Pourquoi un composant ne doit-il pas appeler directement `HttpClient` ?
7. À quoi sert `HttpTestingController` ?
8. Quand le pipe `async` est-il utile ?

## Réponses

1. Dans les providers, avec `provideHttpClient()`.
2. Centraliser les appels et le contrat HTTP des tâches.
3. Non, l'Observable doit être consommé.
4. Pour laisser le proxy ou l'hébergement choisir l'adresse réelle du backend.
5. Chargement, réussite avec données, et erreur.
6. Pour réduire le couplage et rendre les tests plus simples.
7. À intercepter et contrôler les requêtes HTTP dans un test.
8. Lorsqu'un template consomme directement un Observable.
