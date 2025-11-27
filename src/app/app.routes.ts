import { Routes } from '@angular/router';
import { Uc00604 } from './pages/uc00604/uc00604';

export const routes: Routes = [
  /**Primeira rota */
  {path:'', redirectTo: "welcome", pathMatch: 'full'},
  {path:"welcome", loadComponent: () => import ('./pages/welcome/welcome').then(c => c.Welcome) },
  /**Rota padrão sem lasyload */
  {path:"pages/uc00604", component: Uc00604},
  {path:"pages/autenticacao", loadComponent: () => import('./pages/authentication/authentication').then(c => c.Authentication)},

  /**Ultima rota */
  {path:"**", loadComponent: () => import('./pages/welcome/welcome').then(c => c.Welcome)},
];
