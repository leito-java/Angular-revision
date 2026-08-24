# Correction — Trouver la couche en panne

## Scénario A

L'API directe et le rendu initial Angular sont prouvés. La première couche suspecte est le proxy de développement.

Vérifiez que le frontend a été lancé avec `npm start` et que `proxy.conf.json` cible `http://localhost:8080`. Rechargez ensuite la page : la preuve attendue est un `GET /api/tasks` avec le statut `200` depuis l'origine Angular.

## Scénario B

Le réseau, le proxy et la lecture sont prouvés. L'échec concerne le contrat de création ou la validation.

Dans l'onglet Réseau, comparez le corps JSON envoyé aux champs et valeurs autorisés par `TaskDraft`. Lisez aussi le corps de la réponse `400`. La preuve finale est une réponse `201` suivie de l'affichage de la tâche renvoyée par le serveur.

## Scénario C

Le parcours d'écriture semble fonctionner, mais la persistance n'est pas prouvée. Vérifiez le profil Spring actif, `DB_URL` et le port réellement utilisé dans les logs.

L'API peut viser une autre instance que celle observée dans pgAdmin, ou une configuration de test en mémoire. La preuve finale consiste à créer une tâche, identifier sa ligne dans la bonne base, redémarrer uniquement l'API puis retrouver la même ligne et la même tâche dans Angular.

## Exemple pour la Pull Request

```text
## Vérifications automatisées
- `npm test` : réussi
- `npm run build` : réussi
- `mvn test` : réussi

## Test manuel
- CRUD complet via Angular : réussi
- persistance après redémarrage de l'API : réussie
- donnée temporaire supprimée : oui
```
