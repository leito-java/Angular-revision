// Component déclare un composant ; signal stocke l'état ; computed dérive une valeur.
import { Component, computed, signal } from '@angular/core';
// Composant chargé de créer ou modifier une tâche.
import { TaskFormComponent } from './task-form/task-form.component';
// Composant chargé de sélectionner le filtre de la liste.
import { TaskFilterComponent } from './task-filter/task-filter.component';
// Composant chargé d'afficher la collection de tâches.
import { TaskListComponent } from './task-list/task-list.component';
// Types partagés par les composants.
import { Task, TaskDraft, TaskFilter } from './task.model';

// Métadonnées qui décrivent le composant racine à Angular.
@Component({
  // Nom de la balise HTML utilisée dans index.html : <app-root>.
  selector: 'app-root',
  // Composants standalone utilisables dans le template.
  imports: [TaskFilterComponent, TaskFormComponent, TaskListComponent],
  // Fichier HTML associé au composant.
  templateUrl: './app.component.html',
  // Fichier CSS associé au composant.
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Signal contenant la liste réactive des tâches.
  protected readonly tasks = signal<Task[]>([
    // Données initiales utilisées pour la démonstration.
    { id: 1, title: 'Lire le chapitre TypeScript', priority: 'medium', completed: true },
    { id: 2, title: 'Créer mon premier composant Angular', priority: 'high', completed: false },
  ]);
  // Tâche en cours d'édition, ou null lorsque le formulaire crée une tâche.
  protected readonly editingTask = signal<Task | null>(null);

  // Filtre actuellement sélectionné par l'utilisateur.
  protected readonly currentFilter = signal<TaskFilter>('all');

  // Statistiques dérivées : elles se recalculent automatiquement lorsque tasks change.
  protected readonly completedTaskCount = computed(() => this.tasks().filter((task) => task.completed).length);
  protected readonly remainingTaskCount = computed(() => this.tasks().length - this.completedTaskCount());

  // Liste dérivée : computed la recalcule quand tasks ou currentFilter change.
  protected readonly filteredTasks = computed(() => {
    const filter = this.currentFilter();
    if (filter === 'active') return this.tasks().filter((task) => !task.completed);
    if (filter === 'completed') return this.tasks().filter((task) => task.completed);
    return this.tasks();
  });

  /** Crée une tâche ou enregistre les modifications de la tâche sélectionnée. */
  protected saveTask(draft: TaskDraft): void {
    // Lit la valeur actuelle du signal.
    const editingTask = this.editingTask();
    // Une tâche sélectionnée signifie que nous sommes en mode modification.
    if (editingTask) {
      // Remplace seulement la tâche ayant le même identifiant.
      this.tasks.update((tasks) => tasks.map((task) => task.id === editingTask.id ? { ...task, ...draft } : task));
    } else {
      // Ajoute une nouvelle tâche non terminée à la fin du tableau.
      this.tasks.update((tasks) => [...tasks, { id: Date.now(), ...draft, completed: false }]);
    }
    // Quitte le mode édition.
    this.editingTask.set(null);
  }

  /** Inverse l'état terminé/non terminé d'une tâche. */
  protected toggleTask(id: number): void {
    // map crée un nouveau tableau et ne modifie que la tâche recherchée.
    this.tasks.update((tasks) => tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  /** Supprime la tâche identifiée par id. */
  protected deleteTask(id: number): void {
    // filter crée un nouveau tableau sans la tâche supprimée.
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
    // Ferme aussi le mode édition si cette tâche était sélectionnée.
    if (this.editingTask()?.id === id) this.editingTask.set(null);
  }

  /** Sélectionne une tâche pour préremplir le formulaire. */
  protected editTask(id: number): void {
    // find retourne la tâche correspondante ; ?? null gère son absence.
    this.editingTask.set(this.tasks().find((task) => task.id === id) ?? null);
  }
}
