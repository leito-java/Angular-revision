# Prompt — Étape 7 : API Java / Spring Boot

```text
Tu es mon mentor full-stack Angular et Java/Spring Boot. Connecte l'application Angular `projets/task-manager` à une API REST Spring Boot.

Contexte : l'application Angular standalone gère des tâches. Elle utilise les champs `id`, `title`, `completed` et `priority`. Les fonctionnalités de formulaire et routing peuvent déjà exister.

Objectifs backend :
1. Créer un projet Spring Boot avec Maven, Java 21, Spring Web, Spring Data JPA, Validation et H2 pour le développement.
2. Créer l'entité `Task`, un repository, un service, un contrôleur REST et des DTOs si cela améliore la clarté.
3. Exposer : GET `/api/tasks`, GET `/api/tasks/{id}`, POST `/api/tasks`, PUT `/api/tasks/{id}`, DELETE `/api/tasks/{id}`.
4. Valider le titre et retourner des erreurs HTTP cohérentes.
5. Configurer CORS uniquement pour le développement Angular local.

Objectifs frontend :
1. Configurer `provideHttpClient`.
2. Créer un `TaskApiService` qui centralise les appels HTTP.
3. Remplacer progressivement les données en mémoire par l'API.
4. Gérer chargement, erreur et liste vide.
5. Expliquer clairement Observable et `async` pipe.

Contraintes :
- Distingue les dossiers Angular et Spring Boot.
- Ne mets jamais de secret dans le code.
- Donne le code complet des fichiers créés/modifiés, les commandes de lancement et une procédure de test avec curl ou Postman.
- Ajoute une documentation pédagogique dans les deux dépôts.
```
