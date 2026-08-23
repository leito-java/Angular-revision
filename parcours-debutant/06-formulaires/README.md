# Étape 06 — Formulaires réactifs

## Objectif

Saisir une tâche, valider les données et réutiliser le formulaire pour la modification.

## Structure du formulaire

```ts
form = new FormGroup({
  title: new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3),
    ],
  }),
});
```

- `FormGroup` représente le formulaire.
- `FormControl` représente un champ.
- `Validators` contient les règles.

Le template relie le HTML au formulaire :

```html
<form [formGroup]="form" (ngSubmit)="submit()">
  <input formControlName="title">
  <button [disabled]="form.invalid">Ajouter</button>
</form>
```

Les contrôles existent dans TypeScript, ce qui facilite la validation et les tests.

## Exercice

Ajoutez un champ `description` facultatif limité à 200 caractères et affichez un message si la limite est dépassée.

## Exemple exécutable

```cmd
npm run start:06
```

Le code étudié se trouve dans [`src/etape-06`](../../projets/atelier-debutant/src/etape-06/).

## Erreur fréquente

Valider uniquement dans Angular. Le serveur devra répéter les validations importantes, car un client peut contourner l'interface.

## Je peux continuer si…

- Je distingue `FormGroup` et `FormControl`.
- Je sais ajouter un validateur.
- Je comprends `form.invalid`.
- Je sais récupérer les valeurs du formulaire.

Pour approfondir, consultez [`07-formulaires`](../../07-formulaires/README.md).

## Source officielle

- [Angular — Reactive Forms](https://angular.dev/guide/forms/reactive-forms)
