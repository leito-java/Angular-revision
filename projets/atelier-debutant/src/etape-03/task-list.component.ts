import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: `
    <h2>Liste séparée</h2>
    <ul>
      @for (task of tasks; track task) {
        <li>{{ task }}</li>
      }
    </ul>
  `,
})
export class TaskListComponent {
  protected readonly tasks = ['Créer un composant', 'Importer le composant'];
}
