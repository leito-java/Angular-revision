# Exercice — Tester une erreur HTTP

## Objectif

Vérifier que le store affiche un message compréhensible lorsque l'API est indisponible.

## Travail demandé

1. Ajoutez un test à `task-api.service.spec.ts` qui retourne une erreur HTTP `500`.
2. Ajoutez un test du store avec un faux service qui retourne `throwError`.
3. Vérifiez que `store.error()` contient un message.
4. Vérifiez que `store.loading()` revient à `false`.
5. Ne démarrez pas le backend Java pendant ces tests.

## Contraintes

- aucun composant ne doit appeler directement `HttpClient` ;
- le test HTTP utilise `HttpTestingController` ;
- le faux service du store retourne un Observable en erreur.

## Je peux continuer si…

- le test reproduit une panne sans serveur réel ;
- l'utilisateur obtient un message et peut réessayer ;
- les autres tests restent indépendants du dépôt Java.
