// Importe la fonction qui démarre une application Angular standalone.
import { bootstrapApplication } from '@angular/platform-browser';
// Importe le composant racine affiché au lancement de l'application.
import { AppComponent } from './app/app.component';

// Démarre Angular avec AppComponent et affiche toute erreur dans la console.
bootstrapApplication(AppComponent).catch((error: unknown) => console.error(error));
