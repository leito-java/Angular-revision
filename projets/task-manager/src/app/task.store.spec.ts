import { TestBed } from '@angular/core/testing';
import { TaskStore } from './task.store';

describe('TaskStore', () => {
  let store: TaskStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    store = TestBed.inject(TaskStore);
  });

  it('expose les compteurs dérivés de la liste', () => {
    expect(store.taskCount()).toBe(2);
    expect(store.completedTaskCount()).toBe(1);
    expect(store.remainingTaskCount()).toBe(1);
  });

  it('crée une tâche non terminée', () => {
    const task = store.createTask({ title: 'Comprendre le routeur', priority: 'high' });

    expect(store.taskById(task.id)).toEqual(task);
    expect(task.completed).toBe(false);
    expect(store.taskCount()).toBe(3);
  });

  it('modifie une tâche existante', () => {
    const updated = store.updateTask(2, { title: 'Créer une page Angular', priority: 'low' });

    expect(updated).toBe(true);
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
