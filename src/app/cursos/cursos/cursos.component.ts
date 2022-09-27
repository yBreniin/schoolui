import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/core/model';
import { CursosService } from '../cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent implements OnInit {

  cursos: Observable<Curso[]> ; //apos a ligação com a api no service aqui se passa a ser Observable
  displayedColumns = ['id', 'nomecurso'];
  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.list(); // só o basico
   } //importação para fazer relação com o service

  ngOnInit(): void {
  }

}
