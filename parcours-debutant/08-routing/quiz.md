# Quiz — Routing Angular

Répondez avant d’ouvrir le corrigé.

1. À quoi sert `router-outlet` ?
2. Quelle différence existe entre `routerLink` et `href` pour une navigation interne ?
3. Que représente `:id` dans `tasks/:id/edit` ?
4. Pourquoi utilise-t-on `loadComponent` ?
5. Pourquoi la route `**` doit-elle être la dernière ?
6. Quel service permet de lire les paramètres de la route active ?
7. Quel outil Angular facilite les tests de navigation ?

<details>
<summary>Voir le corrigé</summary>

1. Il marque la zone où le composant de la route active est rendu.
2. `routerLink` laisse Angular naviguer côté client sans recharger l’application ; `href` demande normalement une nouvelle page au navigateur.
3. Un segment dynamique nommé `id`, par exemple `2` dans `/tasks/2/edit`.
4. Pour charger le code d’une page seulement lorsqu’elle est demandée.
5. `**` accepte toute URL ; placée plus haut, elle empêcherait les routes suivantes d’être atteintes.
6. `ActivatedRoute`.
7. `RouterTestingHarness`.

</details>
