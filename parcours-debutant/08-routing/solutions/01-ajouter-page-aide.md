# Correction — Ajouter une page Aide

## Le composant page

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-help-page',
  template: `
    <h1>Besoin d’aide ?</h1>
    <ul>
      <li>Créez une tâche avec un titre précis.</li>
      <li>Choisissez sa priorité.</li>
      <li>Terminez-la quand le travail est fini.</li>
    </ul>
  `,
})
export class HelpPageComponent {}
```

Une page reste un composant standalone ordinaire.

## La route

Ajoutez cette règle avant `**` dans `app.routes.ts` :

```ts
{
  path: 'help',
  title: 'Aide · TaskFlow',
  loadComponent: () => import('./pages/help-page/help-page.component')
    .then((module) => module.HelpPageComponent),
},
```

L’import dynamique permet le chargement différé.

## Le lien

Importez `RouterLink` dans le composant qui possède la navigation, puis ajoutez :

```html
<a routerLink="/help">Aide</a>
```

## Le test

```ts
it('affiche la page d’aide', async () => {
  const harness = await RouterTestingHarness.create();

  await harness.navigateByUrl('/help', HelpPageComponent);

  expect(harness.routeNativeElement?.textContent).toContain('Besoin d’aide ?');
});
```

Le test prouve que l’URL, la configuration du routeur et le composant fonctionnent ensemble.
