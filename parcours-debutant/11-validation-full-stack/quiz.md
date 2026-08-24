# Quiz — validation full-stack

1. Angular doit-il connaître le port PostgreSQL ?
2. Quel fichier transfère `/api` vers Spring Boot en développement ?
3. Pourquoi tester l'API directement avant de modifier Angular ?
4. Que suggère un statut HTTP `400` ?
5. Que signifie CRUD ?
6. Pourquoi redémarrer uniquement l'API pendant le test de persistance ?
7. Quel outil du navigateur affiche le payload et la réponse HTTP ?
8. Quelles informations ne doivent jamais apparaître dans une Pull Request ?

## Réponses

1. Non. Angular communique avec l'API ; seule l'API connaît la base.
2. `proxy.conf.json`.
3. Pour savoir si la panne se situe déjà côté backend ou entre Angular et l'API.
4. La requête atteint le serveur, mais les données envoyées ne respectent probablement pas la validation ou le contrat.
5. Create, Read, Update, Delete : créer, lire, modifier et supprimer.
6. Pour prouver que les données ne vivaient pas seulement dans la mémoire du processus Java.
7. L'onglet Réseau ou Network des outils de développement.
8. Les mots de passe, jetons, secrets et données personnelles.
