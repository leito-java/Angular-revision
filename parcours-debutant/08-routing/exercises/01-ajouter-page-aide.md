# Exercice — Ajouter une page Aide

## Objectif

Ajouter au Task Manager une page chargée à la demande et accessible à l’URL `/help`.

## Travail demandé

1. Créez un composant standalone `HelpPageComponent` dans `src/app/pages/help-page`.
2. Affichez un titre « Besoin d’aide ? » et trois conseils d’utilisation.
3. Ajoutez une route `/help` avec un titre de document.
4. Utilisez `loadComponent` pour charger la page à la demande.
5. Ajoutez un lien « Aide » dans la navigation avec `routerLink`.
6. Ajoutez un test qui navigue vers `/help` avec `RouterTestingHarness`.

## Contraintes

- Ne modifiez pas `main.ts` : le routeur est déjà fourni.
- Ne placez pas la nouvelle route après `**`.
- N’utilisez pas `href` pour la navigation interne.

## Je peux continuer si…

- saisir `/help` affiche la bonne page ;
- cliquer sur « Aide » ne recharge pas tout le navigateur ;
- une route inconnue affiche toujours la page 404 ;
- le test automatisé passe.
