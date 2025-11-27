import { Routes } from '@angular/router';

export const routes: Routes = [
  /**Primeira rota */
  {path:'', redirectTo: "welcome", pathMatch: 'full'},
  {path:"welcome", loadComponent: () => import ('./pages/welcome/welcome').then(c => c.Welcome) },


  /**Ultima rota */
  {path:"**", loadComponent: () => import('./pages/welcome/welcome').then(c => c.Welcome)},
];
