import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TravelsCadeteComponent } from './travels-cadete/travels-cadete.component';
import { CardComponent } from './card/card.component';
import { HistorialComponent } from './historial/historial.component';
import { CardHistoryComponent } from './card-history/card-history.component';
// import { LayaoutComponent } from './layaout/layaout.component';
import { RouterModule } from '@angular/router';
import { ViajesActualesComponent } from './viajes-actuales/viajes-actuales.component';
import { CardViajesActualesComponent } from './card-viajes-actuales/card-viajes-actuales.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    // LayaoutComponent

    FooterComponent,
    TravelsCadeteComponent,
    CardComponent,
    HistorialComponent,
    CardHistoryComponent,
    ViajesActualesComponent,
    CardViajesActualesComponent,
    LoaderComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    TravelsCadeteComponent,
    CardComponent,
    HistorialComponent,
    ViajesActualesComponent,
    LoaderComponent
    // LayaoutComponent
  ]
})
export class ComponentsModule { }
