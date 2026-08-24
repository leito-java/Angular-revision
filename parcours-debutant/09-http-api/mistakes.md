# Erreurs fréquentes — HTTP Angular

## Angular affiche « Impossible de joindre l'API »

Vérifiez que le projet Spring Boot du dépôt `java-revision` est lancé sur le port `8080`.

## Les appels `/api` retournent la page Angular

Lancez le frontend avec `npm start`. Ce script active `proxy.conf.json`.

## `HttpClient` ne peut pas être injecté

Ajoutez `provideHttpClient()` dans `app.config.ts`.

## Une requête n'est jamais envoyée

Un Observable `HttpClient` doit être consommé avec `subscribe`, `async`, `toSignal` ou une chaîne qui finit par s'abonner.

## La page reste bloquée sur « Chargement »

Utilisez `finalize` pour remettre `loading` à `false` après une réussite comme après une erreur.

## Les tests appellent le vrai backend

Utilisez `provideHttpClientTesting()` et `HttpTestingController`, ou injectez un faux `TaskApiService` dans le test du store.

## L'URL du serveur est répétée partout

Centralisez l'endpoint dans `TaskApiService` et utilisez le proxy ou une configuration d'environnement.
