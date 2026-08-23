import { Component, input, output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task-item',
  template: `
    <div class="task">
      <span>{{ task().title }}</span>
      <button type="button" (click)="deleted.emit(task().id)">Supprimer</button>
    </div>
  `,
})
export class TaskItemComponent {
  readonly task = input.required<Task>();
  readonly deleted = output<number>();
}
