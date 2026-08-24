# Glossaire Angular pour débutants

**Angular** — Framework permettant de construire des applications web organisées en composants.

**Composant** — Partie de l'interface composée d'une classe TypeScript, d'un template et éventuellement de styles.

**Template** — HTML enrichi par Angular pour afficher les données et écouter les actions de l'utilisateur.

**Sélecteur** — Nom de la balise HTML qui représente un composant, par exemple `<app-task-item>`.

**Standalone** — Composant qui déclare directement ses dépendances sans nécessiter de `NgModule`.

**Input** — Donnée transmise d'un composant parent vers un composant enfant.

**Output** — Événement émis par un enfant vers son parent.

**Signal** — Conteneur réactif dont les changements peuvent actualiser automatiquement l'interface.

**État** — Ensemble des données qui peuvent changer pendant l'utilisation de l'application.

**Reactive Form** — Formulaire dont les champs et validations sont définis dans TypeScript.

**Injection de dépendances** — Mécanisme par lequel Angular fournit à une classe les services dont elle a besoin.

**Service** — Classe qui centralise une logique ou un accès aux données partagé entre plusieurs composants.

**Routing** — Système qui associe des URL aux pages ou composants de l'application.

**RouterOutlet** — Emplacement du template dans lequel Angular affiche la page correspondant à l'URL active.

**RouterLink** — Directive Angular utilisée pour naviguer vers une route interne sans recharger toute l'application.

**Paramètre de route** — Partie dynamique d'une URL, comme `:id`, qui permet d'identifier la ressource affichée.

**Lazy loading** — Chargement du code d'une page seulement au moment où l'utilisateur la demande.

**Observable** — Flux de valeurs asynchrones souvent utilisé avec HTTP et RxJS.

**Contrat API** — Structure publique des requêtes et réponses HTTP partagée entre le frontend et le backend.

**Normalisation** — Transformation d'une saisie vers une forme prévisible, par exemple une chaîne vide vers `null`.

**Source de vérité** — Valeur de référence dont les autres représentations sont calculées, comme `status` pour l'état d'une tâche.

**Proxy de développement** — Intermédiaire qui transfère les requêtes Angular `/api` vers le serveur Java local afin de garder des URL relatives dans le frontend.

**Port** — Numéro qui identifie un service réseau sur une machine, par exemple `4200` pour Angular ou `8080` pour l'API.

**Variable d'environnement** — Valeur fournie au processus au démarrage, utilisée notamment pour configurer une URL ou un secret sans modifier le code.

**Validation full-stack** — Vérification du trajet complet d'une action, depuis l'interface jusqu'à la base de données et retour.

**Cause racine** — Première cause technique expliquant un échec, par opposition au message final qui décrit seulement sa conséquence.
