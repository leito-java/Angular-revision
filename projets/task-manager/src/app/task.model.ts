// Type union : seules ces trois valeurs sont acceptées comme priorité.
export type TaskPriority = 'low' | 'medium' | 'high';

// Valeurs autorisées pour le filtre de la liste.
export type TaskFilter = 'all' | 'active' | 'completed';

// Données saisies avant la création ou la modification d'une tâche.
export interface TaskDraft {
  // Texte décrivant la tâche.
  title: string;
  // Niveau de priorité choisi dans le formulaire.
  priority: TaskPriority;
}

// Tâche enregistrée : elle reprend TaskDraft et ajoute une identité et un état.
export interface Task extends TaskDraft {
  // Identifiant unique utilisé pour retrouver la tâche.
  id: number;
  // Indique si la tâche est terminée.
  completed: boolean;
}
