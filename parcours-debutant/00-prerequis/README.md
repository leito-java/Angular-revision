# Étape 00 — Prérequis

## Objectif

Préparer l'environnement et comprendre le TypeScript minimum nécessaire avant Angular.

## Environnement nécessaire

Dans un terminal, vérifiez :

```cmd
node --version
npm --version
```

Dans le mini-projet, les commandes utiles sont :

```cmd
npm install
npm start
```

`npm install` installe les dépendances déclarées dans `package.json`. `npm start` démarre le serveur de développement.

## À connaître

Une interface décrit la forme d'un objet :

```ts
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
```

Une fonction typée indique ce qu'elle reçoit et ce qu'elle retourne :

```ts
function completeTask(task: Task): Task {
  return { ...task, completed: true };
}
```

`...task` copie l'objet. La propriété placée après la copie remplace l'ancienne valeur.

## Exercice

Créez une interface `User` avec `id`, `name` et `active`, puis une fonction qui retourne une copie de l'utilisateur avec `active: false`.

## Erreur fréquente

Utiliser `any` pour masquer une erreur de type. Cherchez plutôt le type réel de la valeur.

## Je peux continuer si…

- Je sais expliquer une interface.
- Je comprends `Task[]`.
- Je sais écrire une fonction avec un paramètre et un type de retour.
- Je comprends la copie `{ ...objet }`.

Pour approfondir, consultez aussi le chapitre [`01-typescript`](../../01-typescript/README.md).

## Sources officielles

- [Angular — Essentials et prérequis](https://angular.dev/essentials)
- [TypeScript — documentation](https://www.typescriptlang.org/docs/)
