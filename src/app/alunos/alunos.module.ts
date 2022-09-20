import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './alunos/alunos.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from '../core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AlunosComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    MatTableModule,
    MatCardModule,
    CoreModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class AlunosModule { }
