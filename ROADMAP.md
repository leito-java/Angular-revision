# Feuille de route du Task Manager

Cette feuille de route conserve l'ordre prévu pour faire évoluer le projet pédagogique vers une application de portfolio, puis éventuellement vers un SaaS.

## Objectif général

```text
Apprendre Angular et Java
        +
Aider d'autres débutants à apprendre
        +
Construire un portfolio visible
        =
Préparer une application SaaS vendable
```

## État actuel — Version 1 : fondations Angular

- [x] Composants standalone
- [x] Communication avec `input` et `output`
- [x] État local avec signals et valeurs `computed`
- [x] Création, modification, suppression et finalisation des tâches
- [x] Filtres : toutes, en cours et terminées
- [x] Reactive Forms et validation
- [x] Tests unitaires
- [x] CI avec GitHub Actions
- [ ] Finaliser, tester puis publier la nouvelle interface graphique

Limite connue : les tâches sont uniquement conservées en mémoire et disparaissent après l'actualisation de la page.

## Version 2 — Pages et routing Angular

- [ ] Créer une mise en page commune et une navigation
- [ ] Ajouter la page d'accueil
- [ ] Ajouter la page de liste des tâches
- [ ] Ajouter les pages de création et de modification
- [ ] Ajouter une page « À propos » pédagogique
- [ ] Ajouter une page 404
- [ ] Utiliser les paramètres de route et le lazy loading
- [ ] Tester la navigation

## Version 3 — Fonctionnalités avancées du frontend

- [ ] Ajouter une description et une date limite
- [ ] Ajouter des catégories ou des étiquettes
- [ ] Ajouter la recherche et le tri
- [ ] Ajouter la pagination
- [ ] Demander confirmation avant une suppression
- [ ] Afficher des notifications de succès et d'erreur
- [ ] Améliorer l'accessibilité et le responsive

## Version 4 — API Java et Spring Boot

- [ ] Créer une API REST Spring Boot
- [ ] Connecter Angular avec `HttpClient`
- [ ] Enregistrer les tâches dans PostgreSQL
- [ ] Valider les données côté serveur
- [ ] Appliquer une architecture maintenable et les principes SOLID
- [ ] Documenter l'API avec OpenAPI/Swagger
- [ ] Ajouter les tests unitaires et d'intégration Java

## Version 5 — Authentification et autorisation

- [ ] Ajouter l'inscription et la connexion
- [ ] Utiliser une authentification sécurisée
- [ ] Donner à chaque utilisateur ses propres tâches
- [ ] Protéger les routes Angular
- [ ] Gérer les rôles utilisateur et administrateur
- [ ] Tester les règles de sécurité

## Version 6 — Qualité professionnelle et déploiement

- [ ] Ajouter des tests end-to-end
- [ ] Étendre la CI au frontend et au backend
- [ ] Construire les images Docker
- [ ] Configurer les environnements de développement et de production
- [ ] Déployer Angular, Spring Boot et PostgreSQL
- [ ] Ajouter le suivi des erreurs, les journaux et les sauvegardes

## Version 7 — Évolution possible vers un SaaS

- [ ] Ajouter des espaces de travail et des équipes
- [ ] Permettre le partage et l'attribution des tâches
- [ ] Créer une offre gratuite et une offre payante
- [ ] Ajouter les abonnements et la facturation
- [ ] Créer une identité visuelle et une page commerciale
- [ ] Mesurer l'utilisation du produit dans le respect de la vie privée

## Règle pédagogique pour chaque version

Chaque fonctionnalité importante doit être accompagnée de :

1. une explication simple ;
2. un exemple lisible ;
3. un exercice et sa correction ;
4. des erreurs fréquentes ;
5. un quiz ;
6. des tests automatisés ;
7. une vérification par la CI.

