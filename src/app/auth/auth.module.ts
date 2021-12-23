import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { PagesModule } from './pages/pages.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialsModule } from '../materials.module';
@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PagesModule,
    MaterialsModule
  ]
})
export class AuthModule { }
