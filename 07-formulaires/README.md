# Formulaires réactifs Angular

Le mini-projet utilise un **Reactive Form** pour créer et modifier une tâche. Le formulaire est créé dans TypeScript avec `FormGroup` et `FormControl`; les règles de validation sont donc visibles, testables et regroupées au même endroit.

## Template-driven ou Reactive Forms ?

| Approche | Adaptée à |
|---|---|
| Template-driven | Formulaire très court et simple, configuré surtout dans le template HTML. |
| Reactive Forms | Formulaire métier avec validation, édition, tests et logique plus riche. |

Ici, Reactive Forms est préférable : le même formulaire sert à l'ajout et à la modification, avec des validations explicites.

## À retenir

- `Validators.required` impose une valeur.
- `Validators.minLength(3)` impose trois caractères ou plus.
- `touched` signifie que l'utilisateur a visité le champ.
- Le bouton est désactivé tant que le formulaire est invalide.

## Pratiquer et vérifier ses connaissances

1. Réalisez l'[exercice du formulaire de profil](exercises/01-profile-form.md) sans regarder la correction.
2. Comparez ensuite votre travail avec le [composant corrigé](solutions/01-profile-form.ts) et son [template HTML](solutions/01-profile-form.html).
3. Répondez au [quiz et consultez son corrigé expliqué](quiz.md).
4. Relisez les [erreurs fréquentes](mistakes.md) avant de créer votre propre formulaire.
