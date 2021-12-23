import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { TravelsPageCadeteComponent } from './travels-page-cadete/travels-page-cadete.component';
import { RouterModule } from '@angular/router';
import { HistorialViajesComponent } from './historial-viajes/historial-viajes.component';
import { ViajesEnCursoComponent } from './viajes-en-curso/viajes-en-curso.component';


@NgModule({
  declarations: [
    HomeComponent,
    TravelsPageCadeteComponent,
    HistorialViajesComponent,
    ViajesEnCursoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class PagesModule { }
