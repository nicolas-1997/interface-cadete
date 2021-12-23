import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AuthGuard } from './guards/auth.guard';
import { IdConfirmationGuard } from './guards/id-confirmation.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'cadete',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./cadete/cadete.module').then(m => m.CadeteModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy:QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
