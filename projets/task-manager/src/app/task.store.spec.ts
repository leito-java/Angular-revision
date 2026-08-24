import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TaskApiService, TaskUpdate } from './task-api.service';
import { Task, TaskDraft } from './task.model';
import { TaskStore } from './task.store';

class FakeTaskApiService {
  private data: Task[] = [
    { id: 1, title: 'Lire le chapitre TypeScript', priority: 'medium', completed: true },
    { id: 2, title: 'Créer mon premier composant Angular', priority: 'high', completed: false },
  ];

  getTasks() {
    return of(this.data.map((task) => ({ ...task })));
  }

  createTask(draft: TaskDraft) {
    const task: Task = { id: 3, ...draft, completed: false };
    this.data = [...this.data, task];
    return of(task);
  }

  updateTask(id: number, update: TaskUpdate) {
    const task: Task = { id, ...update };
    this.data = this.data.map((item) => item.id === id ? task : item);
    return of(task);
  }

  deleteTask(id: number) {
    this.data = this.data.filter((task) => task.id !== id);
    return of(undefined);
  }
}

describe('TaskStore', () => {
  let store: TaskStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: TaskApiService, useClass: FakeTaskApiService }],
    });
    store = TestBed.inject(TaskStore);
  });

  it('charge la liste et expose ses compteurs dérivés', () => {
    expect(store.taskCount()).toBe(2);
    expect(store.completedTaskCount()).toBe(1);
    expect(store.remainingTaskCount()).toBe(1);
    expect(store.loading()).toBe(false);
  });

  it('crée une tâche non terminée à partir de la réponse API', () => {
    store.createTask({ title: 'Comprendre HttpClient', priority: 'high' }).subscribe();

    expect(store.taskById(3)?.completed).toBe(false);
    expect(store.taskCount()).toBe(3);
  });

  it('modifie une tâche existante', () => {
    store.updateTask(2, { title: 'Créer une page Angular', priority: 'low' }).subscribe();

    expect(store.taskById(2)?.title).toBe('Créer une page Angular');
    expect(store.taskById(2)?.priority).toBe('low');
  });

  it('bascule puis supprime une tâche', () => {
    store.toggleTask(2);
    expect(store.taskById(2)?.completed).toBe(true);

    store.deleteTask(2);
    expect(store.taskById(2)).toBeNull();
    expect(store.taskCount()).toBe(1);
  });
});
