import { Injectable, computed, signal } from '@angular/core';
import { Task, TaskDraft } from './task.model';

/** Source de vérité unique des tâches, partagée par toutes les pages routées. */
@Injectable({ providedIn: 'root' })
export class TaskStore {
  // L'état reste privé : les composants peuvent le lire, mais pas le modifier directement.
  private readonly taskState = signal<Task[]>([
    { id: 1, title: 'Lire le chapitre TypeScript', priority: 'medium', completed: true },
    { id: 2, title: 'Créer mon premier composant Angular', priority: 'high', completed: false },
  ]);

  // asReadonly expose le signal sans sa méthode set.
  readonly tasks = this.taskState.asReadonly();
  readonly taskCount = computed(() => this.tasks().length);
  readonly completedTaskCount = computed(() => this.tasks().filter((task) => task.completed).length);
  readonly remainingTaskCount = computed(() => this.taskCount() - this.completedTaskCount());

  /** Recherche une tâche à partir de l'identifiant contenu dans l'URL. */
  taskById(id: number): Task | null {
    return this.tasks().find((task) => task.id === id) ?? null;
  }

  /** Ajoute une tâche et retourne la nouvelle entité. */
  createTask(draft: TaskDraft): Task {
    const task: Task = { id: Date.now(), ...draft, completed: false };
    this.taskState.update((tasks) => [...tasks, task]);
    return task;
  }

  /** Met à jour la tâche ciblée ; retourne false si elle n'existe plus. */
  updateTask(id: number, draft: TaskDraft): boolean {
    if (!this.taskById(id)) return false;
    this.taskState.update((tasks) => tasks.map((task) => task.id === id ? { ...task, ...draft } : task));
    return true;
  }

  /** Inverse l'état terminé/non terminé. */
  toggleTask(id: number): void {
    this.taskState.update((tasks) => tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  /** Supprime la tâche ciblée. */
  deleteTask(id: number): void {
    this.taskState.update((tasks) => tasks.filter((task) => task.id !== id));
  }
}
