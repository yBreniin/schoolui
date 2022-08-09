import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch:'full', redirectTo:'cursos' // quando iniciar o site será redirecionado automaticamente a cursos
  },
  {
    path: 'cursos', // caminho para modulo curso
    loadChildren: ()=> import('./cursos/cursos.module').then(m => m.CursosModule) // importação do modulo curso e apelidando
  },
  {
    path: 'alunos', // caminho para modulo curso
    loadChildren: ()=> import('./alunos/alunos.module').then(m => m.AlunosModule) // importação do modulo curso e apelidando
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
