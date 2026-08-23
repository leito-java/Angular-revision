import { Component } from '@angular/core';
import { TaskListComponent } from './task-list.component';

@Component({
  selector: 'app-root',
  imports: [TaskListComponent],
  template: `
    <main>
      <p class="lesson">Étape 03 — Composants</p>
      <h1>Découper l'interface</h1>
      <app-task-list />
    </main>
  `,
})
export class AppComponent {}
