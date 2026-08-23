# Composants Angular

Le gestionnaire de tâches est découpé ainsi :

```text
app.component      # garde l'état et coordonne les composants
task-form          # demande à ajouter une tâche
task-list          # affiche la liste
task-item          # affiche une tâche et ses actions
```

Les données descendent avec les `input` et les actions remontent avec les `output`. Cette séparation rend chaque composant plus simple à comprendre, réutiliser et tester.
