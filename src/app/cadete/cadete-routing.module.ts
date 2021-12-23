import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LayaoutComponent } from './components/layaout/layaout.component';
import { HomeComponent } from './pages/home/home.component';
import { TravelsPageCadeteComponent } from './pages/travels-page-cadete/travels-page-cadete.component';
import { HistorialViajesComponent } from './pages/historial-viajes/historial-viajes.component';
import { ViajesEnCursoComponent } from './pages/viajes-en-curso/viajes-en-curso.component';

const routes: Routes = [
  {
    path: '',
    component: LayaoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'viajes',
        component: TravelsPageCadeteComponent
      },
      {
        path: 'history',
        component: HistorialViajesComponent
      },
      {
        path: 'viajes-en-curso',
        component: ViajesEnCursoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadeteRoutingModule { }
