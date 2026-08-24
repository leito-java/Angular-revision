# Étape 11 — Valider l'application full-stack

Faire apparaître une page ne suffit pas à prouver qu'une application fonctionne. Cette étape apprend à démarrer, observer et valider chaque couche du Task Manager avec une méthode utilisable au quotidien en entreprise.

## Objectifs

À la fin de ce chapitre, vous saurez :

- dessiner le trajet d'une requête du navigateur jusqu'à PostgreSQL ;
- distinguer une panne Angular, proxy, API ou base de données ;
- utiliser l'onglet Réseau du navigateur pour observer les appels HTTP ;
- vérifier le contrat avec un scénario CRUD complet ;
- prouver la persistance après un redémarrage ;
- fournir des preuves de vérification dans une Pull Request.

## Prérequis

- avoir terminé [HTTP et API](../09-http-api/README.md) ;
- comprendre le [contrat Angular/Java](../10-contrat-api/README.md) ;
- disposer du backend `task-manager-api` du dépôt `java-revision` ;
- savoir ouvrir deux terminaux.

## La chaîne complète

```text
Navigateur
  ↓ http://localhost:4200
Serveur Angular
  ↓ /api transmis par proxy.conf.json
API Spring Boot :8080
  ↓ service et repository JPA
PostgreSQL :5432 ou :5433
  ↑ réponse SQL
API → JSON → TaskStore → signal → interface
```

Le navigateur ne se connecte jamais directement à PostgreSQL. Angular connaît l'API, et l'API connaît la base. Cette séparation réduit le couplage et protège les identifiants de connexion.

## 1. Démarrer dans le bon ordre

Premier terminal, depuis `java-revision/projets/task-manager-api` :

```powershell
mvn -version
mvn test
mvn spring-boot:run
```

Si PostgreSQL écoute sur `5433`, définissez d'abord les variables dans ce même terminal :

```powershell
$env:DB_URL = "jdbc:postgresql://localhost:5433/taskflow"
$env:DB_USERNAME = "taskflow"
$env:DB_PASSWORD = "taskflow_dev"
```

Deuxième terminal, depuis `Angular-revision/projets/task-manager` :

```powershell
npm ci
npm test
npm start
```

`npm ci` reproduit exactement les versions du `package-lock.json`. Pour un simple redémarrage après une installation déjà réussie, `npm start` suffit.

## 2. Vérifier une couche à la fois

| Couche | Vérification | Résultat attendu |
|---|---|---|
| PostgreSQL | contrôler le port ou ouvrir pgAdmin | instance accessible et base `taskflow` visible |
| API | ouvrir `http://localhost:8080/api/tasks` | réponse JSON, éventuellement `[]` |
| Angular | ouvrir `http://localhost:4200` | application affichée sans page d'erreur |
| Proxy | ouvrir l'onglet Réseau puis recharger `/tasks` | `GET /api/tasks` avec statut `200` |
| Contrat | créer puis modifier une tâche | les champs affichés correspondent à la réponse JSON |
| Persistance | redémarrer uniquement l'API | la tâche existe encore |

Une couche réussie réduit la zone de recherche. Si l'URL directe de l'API échoue, il est inutile de modifier le CSS Angular.

## 3. Lire l'onglet Réseau

Dans les outils de développement du navigateur :

1. ouvrez l'onglet **Réseau** ou **Network** ;
2. filtrez avec `tasks` ;
3. rechargez la page ;
4. sélectionnez la requête `/api/tasks` ;
5. contrôlez la méthode, le statut, le corps envoyé et la réponse.

| Statut ou message | Signification habituelle |
|---|---|
| `200` | lecture ou modification réussie |
| `201` | création réussie |
| `204` | suppression réussie sans corps de réponse |
| `400` | données envoyées invalides |
| `404` | route ou identifiant absent |
| `500` | erreur non gérée côté serveur |
| `ECONNREFUSED` ou `504` via le proxy | API inaccessible sur la cible configurée |

Le statut oriente le diagnostic, mais les journaux de l'API et le corps de réponse donnent la cause précise.

## 4. Exécuter un scénario CRUD complet

Utilisez une tâche de test reconnaissable, par exemple `VALIDATION-LOCAL-001` :

1. **Create** — créez-la avec description, priorité, statut et échéance ;
2. **Read** — rechargez `/tasks` et vérifiez tous les champs ;
3. **Update** — changez son statut vers `done` ;
4. **Filter** — affichez les tâches terminées et retrouvez-la ;
5. **Restart** — redémarrez uniquement Spring Boot puis rechargez Angular ;
6. **Delete** — supprimez la tâche de test ;
7. **Confirm** — rechargez et vérifiez sa disparition.

Ce scénario traverse le formulaire, le modèle TypeScript, le service HTTP, le store, le contrôleur Java, le service métier, JPA, Flyway et PostgreSQL.

## 5. Vérifier PostgreSQL sans contourner l'API

pgAdmin sert à observer le résultat, pas à simuler le comportement utilisateur. Après le scénario, vous pouvez exécuter :

```sql
SELECT id, title, priority, status, due_date
FROM tasks
ORDER BY id;

SELECT installed_rank, version, description, success
FROM flyway_schema_history
ORDER BY installed_rank;
```

Créez et modifiez normalement les tâches par l'interface ou l'API. Une modification SQL manuelle pourrait contourner les validations Java et fausser le test fonctionnel.

## 6. Diagnostiquer sans deviner

| Observation | Première vérification |
|---|---|
| `localhost:4200` est inaccessible | terminal Angular et port `4200` |
| Angular s'affiche mais charge sans fin | requête `/api/tasks` dans l'onglet Réseau |
| le proxy refuse la connexion | API directe sur `localhost:8080` |
| l'API directe échoue | premier `Caused by` dans les logs Java |
| l'API répond `400` | payload envoyé et erreurs de validation |
| une tâche disparaît après redémarrage | profil Spring et instance PostgreSQL réellement ciblée |
| pgAdmin n'affiche pas le serveur `5433` | enregistrement manuel de cette connexion |

La méthode est toujours : observer, isoler, tester une hypothèse, corriger une cause, puis rejouer le scénario concerné.

## 7. Préparer une preuve professionnelle

Dans la Pull Request, ajoutez une section comme celle-ci :

```text
## Vérifications

- `npm test` : tous les tests Angular réussissent
- `npm run build` : build de production réussi
- `mvn test` : tous les tests Java réussissent
- Flyway : migrations V1 et V2 appliquées sur PostgreSQL
- test manuel : création, modification, filtre, redémarrage et suppression réussis
```

Une bonne preuve est courte, reproductible et sans secret. Elle aide la relecture et permet de savoir exactement ce qui a été testé.

## Pratiquer

Réalisez l'[exercice de diagnostic par couches](exercises/01-trouver-la-couche-en-panne.md), puis consultez la [correction](solutions/01-trouver-la-couche-en-panne.md).

Terminez avec la [checklist réutilisable](examples/checklist-validation.md), le [quiz](quiz.md) et les [erreurs fréquentes](mistakes.md).

## Je peux considérer l'étape 7 terminée si…

- je sais expliquer le trajet Angular → API → PostgreSQL ;
- je peux démarrer les services dans le bon ordre ;
- je sais utiliser l'onglet Réseau pour localiser une panne ;
- je peux exécuter un scénario CRUD et supprimer mes données de test ;
- je sais prouver la persistance ;
- les tests Angular et Java ainsi que les deux builds réussissent ;
- les Pull Requests correspondantes ont une CI verte.

## Sources officielles

- [Angular — communication HTTP](https://angular.dev/guide/http)
- [Angular CLI — proxy vers un backend](https://angular.dev/tools/cli/serve#proxying-to-a-backend-server)
- [Microsoft Edge DevTools — activité réseau](https://learn.microsoft.com/microsoft-edge/devtools/network/)
- [MDN — codes de statut HTTP](https://developer.mozilla.org/docs/Web/HTTP/Reference/Status)
