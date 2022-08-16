import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import {MatTableModule} from '@angular/material/table';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatTableModule,
    CoreModule
  ]
})
export class CursosModule { }
