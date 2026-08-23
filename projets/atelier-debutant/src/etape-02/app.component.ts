import { Component } from '@angular/core';

interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-root',
  template: `
    <main>
      <p class="lesson">Étape 02 — Templates</p>
      <h1>{{ title }}</h1>
      <button type="button" (click)="addTask()">Ajouter une tâche</button>

      @if (tasks.length === 0) {
        <p>Aucune tâche.</p>
      } @else {
        <ul>
          @for (task of tasks; track task.id) {
            <li>{{ task.title }}</li>
          }
        </ul>
      }
    </main>
  `,
})
export class AppComponent {
  protected readonly title = 'Mes premières tâches';
  protected tasks: Task[] = [{ id: 1, title: 'Comprendre l’interpolation' }];

  protected addTask(): void {
    this.tasks = [...this.tasks, { id: Date.now(), title: 'Nouvelle tâche' }];
  }
}
