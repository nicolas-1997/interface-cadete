import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadeteRoutingModule } from './cadete-routing.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { LayaoutComponent } from './components/layaout/layaout.component';
import { SharedModule } from '../shared/shared.module';
import { NumberPipe } from './pipesCadete/number.pipe';
import { MaterialsModule } from '../materials.module';
@NgModule({
  declarations: [
    LayaoutComponent,
    NumberPipe,
  ],
  imports: [
    CommonModule,
    CadeteRoutingModule,
    ComponentsModule,
    PagesModule,
    SharedModule,
    MaterialsModule
  ]
})
export class CadeteModule { }
