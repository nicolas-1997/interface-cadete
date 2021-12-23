import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatSnackBarModule
  ],
  exports: [
    MatTableModule,
    MatSnackBarModule
  ]
})
export class MaterialsModule { }
