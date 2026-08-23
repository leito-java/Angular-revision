import { Component } from '@angular/core';
import { TaskItemComponent } from './task-item.component';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  imports: [TaskItemComponent],
  template: `
    <main>
      <p class="lesson">Étape 04 — Inputs et outputs</p>
      <h1>Communication parent-enfant</h1>
      @for (task of tasks; track task.id) {
        <app-task-item [task]="task" (deleted)="deleteTask($event)" />
      } @empty {
        <p>Aucune tâche.</p>
      }
    </main>
  `,
})
export class AppComponent {
  protected tasks: Task[] = [
    { id: 1, title: 'Recevoir avec input' },
    { id: 2, title: 'Émettre avec output' },
  ];

  protected deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
