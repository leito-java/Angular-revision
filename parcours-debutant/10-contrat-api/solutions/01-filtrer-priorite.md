# Correction — filtrer les tâches par priorité

## Type et signal

```ts
type PriorityFilter = 'all' | TaskPriority;

protected readonly priorityFilter = signal<PriorityFilter>('all');
```

## Valeur calculée

```ts
protected readonly filteredTasks = computed(() => {
  const status = this.currentFilter();
  const priority = this.priorityFilter();

  return this.store.tasks().filter((task) => {
    const matchesStatus = status === 'all' || task.status === status;
    const matchesPriority = priority === 'all' || task.priority === priority;
    return matchesStatus && matchesPriority;
  });
});
```

La liste originale reste dans `TaskStore`. Les filtres décrivent seulement une vue dérivée, donc `computed` est mieux adapté qu'un second signal de tâches.

## Template

```html
<label for="priority-filter">Priorité</label>
<select id="priority-filter" (change)="priorityFilter.set(priority.value)" #priority>
  <option value="all">Toutes les priorités</option>
  <option value="low">Basse</option>
  <option value="medium">Moyenne</option>
  <option value="high">Haute</option>
</select>
```

Dans le vrai projet, typez la valeur issue du DOM avec une petite méthode de composant afin d'éviter une conversion non contrôlée dans le template.
