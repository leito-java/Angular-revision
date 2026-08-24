# Erreurs fréquentes — contrat Angular/Java

## Utiliser encore `completed` pour tous les calculs

Le workflow possède maintenant trois états. Utilisez `status` et gardez `completed` seulement pendant la période de compatibilité.

## Envoyer des chaînes vides pour les valeurs facultatives

Normalisez la description et la date vers `null`. L'absence de donnée possède alors une représentation unique.

## Dupliquer les interfaces dans plusieurs services

Centralisez `Task`, `TaskDraft`, `TaskPriority` et `TaskStatus` dans `task.model.ts`.

## Ajouter un champ uniquement dans le template

Une évolution complète traverse le formulaire, le modèle, le service HTTP, le store, l'affichage et les tests.

## Fabriquer localement la réponse d'une création

Utilisez la tâche renvoyée par l'API. Le frontend ne doit pas inventer l'identifiant ni une propriété calculée par Java.

## Lancer Angular sans l'API

Le projet complet a besoin de Spring Boot sur le port 8080 et utilise `proxy.conf.json` pour les appels `/api`.
