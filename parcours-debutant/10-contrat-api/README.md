# Étape 10 — Faire évoluer un contrat Angular/Java

Cette étape enrichit les tâches avec une description, un statut et une date limite. Elle montre surtout comment faire évoluer Angular après une modification de l'API Java.

## Objectifs

À la fin de ce chapitre, vous saurez :

- représenter un contrat JSON avec des types TypeScript ;
- distinguer les données d'un formulaire des données enregistrées ;
- garder une seule source de vérité pour un état métier ;
- normaliser les valeurs facultatives avant un appel HTTP ;
- adapter les composants et les tests lorsqu'un contrat évolue.

## Le trajet des données

```text
TaskFormComponent
→ TaskDraft
→ TaskStore
→ TaskApiService
→ JSON HTTP
→ API Spring Boot
→ PostgreSQL
```

Angular ne dépend pas de l'entité JPA. Il dépend uniquement du contrat HTTP public : noms des propriétés, types et valeurs autorisées.

## Le modèle TypeScript

```ts
export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface TaskDraft {
  title: string;
  description: string | null;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string | null;
}

export interface Task extends TaskDraft {
  id: number;
  completed: boolean;
}
```

`TaskDraft` représente ce qu'Angular envoie pour créer ou modifier. `Task` ajoute les propriétés produites par le serveur.

## Une seule source de vérité

Le statut possède trois valeurs :

```text
todo → in-progress → done
```

Le booléen `completed` est encore présent dans la réponse pour assurer une transition progressive. Il ne doit pas piloter la logique Angular : `status` est la source de vérité.

Si Angular modifiait séparément `status` et `completed`, une tâche pourrait devenir à la fois « en cours » et « terminée ».

## Formulaire et valeurs facultatives

Un champ HTML vide produit une chaîne vide. L'API utilise plutôt `null` pour représenter une description ou une date absente.

```ts
const value = this.form.getRawValue();

this.taskSaved.emit({
  ...value,
  title: value.title.trim(),
  description: value.description.trim() || null,
  dueDate: value.dueDate || null,
});
```

Cette conversion est appelée normalisation. Elle garantit que l'API reçoit une représentation prévisible.

## Répartition des responsabilités

| Élément | Responsabilité |
|---|---|
| `task.model.ts` | Décrire le contrat TypeScript |
| `TaskFormComponent` | Saisir, valider et normaliser un brouillon |
| `TaskApiService` | Envoyer et recevoir le contrat HTTP |
| `TaskStore` | Mettre à jour l'état partagé à partir de la réponse serveur |
| `TaskItemComponent` | Afficher description, statut, priorité et échéance |
| `TaskFilterComponent` | Émettre le statut choisi par l'utilisateur |

## Pourquoi conserver la réponse du serveur ?

Après un `POST` ou un `PUT`, le store utilise la tâche renvoyée par Java. Il ne fabrique pas lui-même l'identifiant ni les propriétés dérivées.

```ts
return this.api.createTask(draft).pipe(
  tap((task) => this.taskState.update((tasks) => [...tasks, task])),
);
```

Le serveur reste ainsi responsable de la version réellement enregistrée.

## Tests importants

- le formulaire produit `null` pour les champs facultatifs vides ;
- le formulaire préremplit les nouveaux champs en modification ;
- le service HTTP envoie exactement le `TaskDraft` attendu ;
- le store calcule les compteurs à partir de `status` ;
- la carte affiche le statut et l'échéance ;
- les filtres émettent les valeurs du contrat.

## Lire le code

1. `src/app/task.model.ts` ;
2. `src/app/task-form/task-form.component.ts` ;
3. `src/app/task-api.service.ts` ;
4. `src/app/task.store.ts` ;
5. `src/app/task-item/` et `task-filter/` ;
6. les fichiers `*.spec.ts` correspondants.

## Pratiquer

Réalisez l'[exercice de filtre par priorité](exercises/01-filtrer-priorite.md), puis comparez avec la [correction](solutions/01-filtrer-priorite.md).

Terminez avec le [quiz](quiz.md) et les [erreurs fréquentes](mistakes.md).

## Je peux continuer si…

- je peux expliquer la différence entre `TaskDraft` et `Task` ;
- je sais pourquoi `status` remplace `completed` dans la logique Angular ;
- je sais convertir une chaîne vide vers `null` ;
- je peux suivre une donnée du formulaire jusqu'à PostgreSQL ;
- je sais quels tests modifier lorsqu'un contrat évolue.

Terminez l'étape 7 du projet avec la [validation full-stack](../11-validation-full-stack/README.md).

## Sources officielles

- [Angular — Reactive Forms](https://angular.dev/guide/forms/reactive-forms)
- [Angular — HTTP Client](https://angular.dev/guide/http)
- [Angular — Signals](https://angular.dev/guide/signals)
- [TypeScript — Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
