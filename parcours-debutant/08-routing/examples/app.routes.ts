import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

/** Exemple minimal de routes dans une application standalone. */
export const routes: Routes = [
  { path: '', title: 'Accueil', component: HomePageComponent },
  {
    path: 'help',
    title: 'Aide',
    loadComponent: () => import('./help-page.component')
      .then((module) => module.HelpPageComponent),
  },
  { path: '**', redirectTo: '' },
];
