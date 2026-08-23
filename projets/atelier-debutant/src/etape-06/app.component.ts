import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

type Priority = 'low' | 'medium' | 'high';

interface Task {
  id: number;
  title: string;
  priority: Priority;
}

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  template: `
    <main>
      <p class="lesson">Étape 06 — Formulaires réactifs</p>
      <h1>Créer une tâche valide</h1>

      <form [formGroup]="form" (ngSubmit)="submit()">
        <p><label>Titre <input formControlName="title"></label></p>
        @if (form.controls.title.touched && form.controls.title.invalid) {
          <p class="error">Le titre doit contenir au moins 3 caractères.</p>
        }

        <p>
          <label>Priorité
            <select formControlName="priority">
              <option value="low">Basse</option>
              <option value="medium">Moyenne</option>
              <option value="high">Haute</option>
            </select>
          </label>
        </p>
        <button type="submit" [disabled]="form.invalid">Ajouter</button>
      </form>

      @for (task of tasks(); track task.id) {
        <p>{{ task.title }} — {{ task.priority }}</p>
      }
    </main>
  `,
})
export class AppComponent {
  protected readonly tasks = signal<Task[]>([]);
  protected readonly form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    priority: new FormControl<Priority>('medium', { nonNullable: true }),
  });

  protected submit(): void {
    if (this.form.invalid) return;
    this.tasks.update((tasks) => [
      ...tasks,
      { id: Date.now(), ...this.form.getRawValue() },
    ]);
    this.form.reset({ title: '', priority: 'medium' });
  }
}
