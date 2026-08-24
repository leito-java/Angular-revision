# Erreurs fréquentes — Routing Angular

## La page ne s’affiche pas

Vérifiez que la coquille importe `RouterOutlet` et contient `<router-outlet />`.

## `routerLink` est inconnu dans le template

Dans un composant standalone, ajoutez `RouterLink` à la propriété `imports` du composant.

## Toutes les URL affichent la page 404

La route `**` a probablement été placée trop tôt. Elle doit rester la dernière.

## `/tasks/new` est interprété comme un identifiant

Une route dynamique telle que `tasks/:id` placée avant `tasks/new` peut capturer le mot `new`. Placez d’abord la route la plus précise.

## Les liens rechargent toute l’application

Pour les pages internes, préférez `[routerLink]` ou `routerLink` à `href`.

## Le paramètre ne change pas quand seule l’URL change

Lire uniquement `route.snapshot` donne une photographie. Abonnez-vous à `paramMap`, ou transformez-le avec `toSignal`, si le même composant peut recevoir un nouvel identifiant.

## Les pages n’ont plus le même état

Deux pages routées ne communiquent pas naturellement comme un parent et son enfant. Placez l’état partagé dans un service injecté, ici `TaskStore`.

## Le test échoue avec « No provider for Router »

Ajoutez `provideRouter(routes)` aux providers du `TestBed`.
