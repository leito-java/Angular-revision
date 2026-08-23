# TypeScript : les bases avant Angular

Angular utilise TypeScript. Avant les composants et les services, maîtrise ces bases.

## Objectifs

- Déclarer et typer des variables ;
- Créer des fonctions, objets et tableaux ;
- Décrire des objets avec des interfaces ;
- Comprendre `async` / `await`.

## Exemple : une tâche typée

```ts
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const task: Task = {
  id: 1,
  title: 'Apprendre TypeScript',
  completed: false,
};

function complete(task: Task): Task {
  return { ...task, completed: true };
}
```

Une interface décrit la forme d'une donnée. Elle aide l'éditeur et le compilateur à détecter les erreurs avant l'exécution.

## À retenir

- Préfère `const`; utilise `let` uniquement lorsqu'une variable doit changer.
- Évite `any` : utilise un type précis ou `unknown` quand le type est réellement inconnu.
- Préfère retourner une nouvelle donnée avec `...` au lieu de modifier un objet reçu.

Voir les exercices dans [`exercises/`](exercises/) et les corrections dans [`solutions/`](solutions/).
