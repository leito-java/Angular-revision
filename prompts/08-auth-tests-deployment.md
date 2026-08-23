# Prompt — Étape 8 : authentification, tests et déploiement

```text
Tu es un mentor senior Angular et Spring Boot. Fais évoluer le gestionnaire de tâches en application prête pour une première mise en ligne, sans complexité inutile.

Contexte : frontend Angular standalone et API REST Spring Boot pour les tâches. Chaque utilisateur ne doit voir et modifier que ses propres tâches.

Découpe ton travail en trois parties, dans cet ordre :

1. Authentification
- Propose une authentification sûre adaptée à un premier SaaS (inscription, connexion, déconnexion).
- Explique le choix entre session/cookie sécurisé et JWT ; recommande une solution et justifie-la.
- Protège les routes Angular et les endpoints Spring Boot.
- Ne stocke pas de jeton sensible de manière non sûre.
- Ajoute le modèle utilisateur et l'association entre un utilisateur et ses tâches.

2. Tests
- Ajoute des tests Angular pour un service et un composant critique.
- Ajoute des tests Spring Boot pour le service ou le contrôleur.
- Explique ce que chaque test protège.
- Donne les commandes pour lancer les tests.

3. Déploiement
- Prépare des configurations séparées développement/production.
- Utilise des variables d'environnement pour les URLs et secrets.
- Donne une checklist : build Angular, build Java, base de données, CORS, HTTPS, logs, sauvegardes et monitoring.
- Propose une stratégie de déploiement simple, sans inventer de secrets ni effectuer de publication réelle.

Contraintes :
- Explique les risques de sécurité avant le code concerné.
- Donne des fichiers complets ou des patchs précis.
- Termine par une checklist de mise en production et une liste des limites restantes avant de vendre le produit comme SaaS.
```
