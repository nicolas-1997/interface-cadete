import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuicklinkModule } from 'ngx-quicklink';
import { MaterialsModule } from './materials.module';
import { HoraPipe } from './pipes/hora.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HoraPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuicklinkModule,
    HttpClientModule,
    MaterialsModule
  ],
  exports: [
    HoraPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
