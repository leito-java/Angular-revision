# Quiz

1. Qu'est-ce qu'un `FormGroup` ?
2. Pourquoi utiliser un `FormControl` non nullable ?
3. Quand faut-il montrer une erreur de validation ?
4. Quelle différence entre `valid` et `touched` ?
5. Pourquoi un formulaire réactif est-il pratique à tester ?

## Corrigé expliqué

### 1. Qu'est-ce qu'un `FormGroup` ?

Un `FormGroup` rassemble plusieurs contrôles dans un même formulaire. Il permet de lire leurs valeurs et de connaître l'état global du formulaire avec `valid`, `invalid`, `touched` ou `dirty`.

### 2. Pourquoi utiliser un `FormControl` non nullable ?

Avec `{ nonNullable: true }`, le contrôle ne retourne jamais `null`. Son type reste par exemple `string` au lieu de `string | null`, ce qui simplifie le code TypeScript et évite des vérifications inutiles.

### 3. Quand faut-il montrer une erreur de validation ?

Après que l'utilisateur a interagi avec le champ, ou après une tentative de soumission. Afficher toutes les erreurs dès l'ouverture du formulaire donne une mauvaise expérience utilisateur.

### 4. Quelle différence entre `valid` et `touched` ?

- `valid` indique que la valeur respecte toutes les règles de validation.
- `touched` indique que l'utilisateur est entré dans le champ puis l'a quitté.

Un champ peut donc être invalide sans être encore `touched`.

### 5. Pourquoi un formulaire réactif est-il pratique à tester ?

Le formulaire et ses règles sont définis dans TypeScript. Un test peut modifier les contrôles, vérifier leur validité, déclencher la soumission et contrôler les données émises sans dépendre uniquement d'actions manuelles dans le navigateur.
