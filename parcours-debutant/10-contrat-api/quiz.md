# Quiz — contrat Angular/Java

1. Quelle est la différence entre `TaskDraft` et `Task` ?
2. Pourquoi `TaskStatus` est-il une union de chaînes ?
3. Quelle propriété pilote maintenant l'état métier ?
4. Pourquoi `completed` existe-t-il encore dans `Task` ?
5. Pourquoi convertir une chaîne vide en `null` ?
6. Quel service connaît l'URL `/api/tasks` ?
7. Pourquoi le store utilise-t-il la réponse du serveur après une création ?
8. Un filtre local doit-il modifier le contrat HTTP ?

## Réponses

1. `TaskDraft` est envoyé au serveur ; `Task` ajoute les propriétés produites par le serveur.
2. Pour limiter les valeurs aux trois statuts autorisés et détecter les erreurs à la compilation.
3. `status`.
4. Pour assurer temporairement la compatibilité avec l'ancienne version du frontend.
5. Pour représenter l'absence de valeur de manière stable dans le contrat JSON.
6. `TaskApiService`.
7. Elle contient la version réellement enregistrée, notamment l'identifiant et les propriétés dérivées.
8. Non. Il produit seulement une vue locale des tâches déjà chargées.
