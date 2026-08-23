# Étape 01 — Première application Angular

## Objectif

Comprendre comment Angular démarre et affiche un composant.

## Les fichiers essentiels

```text
src/index.html          contient la balise <app-root>
src/main.ts             démarre Angular
app/app.component.ts    définit le composant racine
app/app.component.html  contient son interface
```

Dans `main.ts` :

```ts
bootstrapApplication(AppComponent);
```

Cette ligne demande à Angular de démarrer avec `AppComponent`.

Un composant possède au minimum un sélecteur et un template :

```ts
@Component({
  selector: 'app-root',
  template: '<h1>Bonjour Angular</h1>',
})
export class AppComponent {}
```

## Exercice

Remplacez le titre par votre nom et ajoutez un paragraphe expliquant pourquoi vous apprenez Angular.

## Exemple exécutable

Depuis `projets/atelier-debutant`, lancez :

```cmd
npm run start:01
```

Le code étudié se trouve dans [`src/etape-01`](../../projets/atelier-debutant/src/etape-01/).

## Erreur fréquente

Confondre la classe TypeScript du composant avec son template HTML. La classe porte les données et comportements ; le template décrit l'affichage.

## Je peux continuer si…

- Je sais à quoi sert `main.ts`.
- Je sais expliquer `@Component`.
- Je comprends le lien entre `selector` et `<app-root>`.
- Je sais où modifier le HTML affiché.

## Sources officielles

- [Angular — Installation](https://angular.dev/installation)
- [Angular — Anatomie d'un composant](https://angular.dev/guide/components)
