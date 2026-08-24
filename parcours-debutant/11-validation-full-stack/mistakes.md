# Erreurs fréquentes — validation full-stack

## Modifier Angular alors que l'API directe ne répond pas

Testez d'abord `http://localhost:8080/api/tasks`. Si cette URL échoue, l'interface ne peut pas réparer le backend.

## Considérer une page affichée comme une validation complète

Le HTML peut s'afficher alors que les appels HTTP échouent. Contrôlez l'onglet Réseau et réalisez un scénario CRUD.

## Lancer Angular avec `ng serve` sans le proxy prévu

Le script `npm start` active `proxy.conf.json`. Une autre commande peut oublier cette option et casser les appels relatifs `/api`.

## Vérifier uniquement les tests unitaires

Les tests isolés sont indispensables, mais ils ne prouvent pas que les ports, le proxy, le contrat et PostgreSQL sont correctement reliés sur la machine.

## Tester avec des données impossibles à reconnaître

Utilisez un titre unique comme `VALIDATION-LOCAL-001`, puis supprimez-le. Cela évite de confondre une ancienne ligne avec le résultat du test actuel.

## Modifier directement la base pour valider le formulaire

Une requête SQL contourne Angular et la validation Java. Utilisez pgAdmin pour observer ; utilisez l'interface ou l'API pour le test fonctionnel.

## Cacher une vérification non exécutée

Une Pull Request professionnelle indique aussi les limites. Écrivez clairement « non exécuté » et la raison au lieu de laisser croire que tout a été contrôlé.
