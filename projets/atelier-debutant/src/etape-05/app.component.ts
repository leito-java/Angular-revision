import { Component, computed, signal } from '@angular/core';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <main>
      <p class="lesson">Étape 05 — Signals</p>
      <h1>État réactif</h1>
      <p>{{ remainingCount() }} tâche(s) restante(s)</p>
      <button type="button" (click)="addTask()">Ajouter</button>

      @for (task of tasks(); track task.id) {
        <div class="task" [class.completed]="task.completed">
          <span>{{ task.title }}</span>
          <button type="button" (click)="toggleTask(task.id)">Basculer</button>
        </div>
      }
    </main>
  `,
})
export class AppComponent {
  protected readonly tasks = signal<Task[]>([
    { id: 1, title: 'Lire un signal avec ()', completed: false },
  ]);

  protected readonly remainingCount = computed(
    () => this.tasks().filter((task) => !task.completed).length,
  );

  protected addTask(): void {
    this.tasks.update((tasks) => [
      ...tasks,
      { id: Date.now(), title: 'Nouvelle tâche réactive', completed: false },
    ]);
  }

  protected toggleTask(id: number): void {
    this.tasks.update((tasks) => tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    ));
  }
}
