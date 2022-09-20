import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/model';
import { CursosService } from '../cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent implements OnInit {

  cursos: Curso[] = [];
  displayedColumns = ['id', 'nomecurso'];
  constructor(private cursosService: CursosService) { } //importação para fazer relação com o service

  ngOnInit(): void {
    this.cursos = this.cursosService.list(); // só o basico
  }

}
