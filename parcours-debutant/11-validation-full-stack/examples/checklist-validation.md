# Checklist réutilisable — validation locale

Copiez cette checklist dans votre Pull Request et remplacez les résultats attendus par les résultats obtenus.

## Environnement

- [ ] `node --version` correspond aux prérequis Angular du projet.
- [ ] `npm --version` répond.
- [ ] `mvn -version` indique Java 21.
- [ ] PostgreSQL écoute sur le port configuré côté Java.

## Vérifications automatisées

- [ ] `npm ci` réussit.
- [ ] `npm test` réussit.
- [ ] `npm run build` réussit.
- [ ] `mvn test` réussit.

## Vérifications fonctionnelles

- [ ] `GET /api/tasks` répond directement sur le port `8080`.
- [ ] Angular charge les tâches via `/api/tasks`.
- [ ] création réussie.
- [ ] modification réussie.
- [ ] filtre par statut réussi.
- [ ] tâche conservée après redémarrage de l'API.
- [ ] suppression de la donnée de test réussie.

## Hygiène

- [ ] aucun mot de passe réel n'est commité ou copié dans la PR.
- [ ] aucune donnée de test temporaire n'est conservée.
- [ ] les limites ou vérifications non exécutées sont signalées.
