import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { WebsiteHomeComponent } from './website-home/website-home.component';


@NgModule({
  declarations: [
    WebsiteHomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
