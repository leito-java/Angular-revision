# Exercice — Trouver la couche en panne

Pour chaque scénario, répondez sans modifier le code immédiatement :

1. quelle couche est encore prouvée fonctionnelle ?
2. quelle est la première couche non prouvée ?
3. quelle vérification minimale faut-il faire ensuite ?
4. quelle preuve confirmera le retour à la normale ?

## Scénario A

`http://localhost:8080/api/tasks` renvoie du JSON. L'application Angular s'affiche, mais la page des tâches montre une erreur réseau. Dans l'onglet Réseau, `/api/tasks` reçoit `504`.

## Scénario B

Angular et l'API démarrent. La création renvoie `400`, tandis que le chargement de la liste renvoie `200`.

## Scénario C

Une tâche créée apparaît dans Angular, puis disparaît après le redémarrage de Spring Boot. Deux serveurs PostgreSQL écoutent sur `5432` et `5433`.

## Bonus

Rédigez une section « Vérifications » de Pull Request qui distingue tests automatisés et test manuel.
