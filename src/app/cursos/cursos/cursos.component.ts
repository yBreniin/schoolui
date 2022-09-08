import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/model';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent implements OnInit {
  cursos: Curso[] = [

    {"id": 1, "nomecurso": "Desenvolvimento de Sistemas"},
    {"id": 2, "nomecurso": "Química"},
    {"id": 3, "nomecurso": "Administração"},
    {"id": 4, "nomecurso": "Contabilidade"},
    {"id": 5, "nomecurso": "Logística"},
    {"id": 6, "nomecurso": "Marketing"},
    {"id": 7, "nomecurso": "Edificações"}

  ];

  displayedColumns = ['id', 'nomecurso'];
  constructor() { }

  ngOnInit(): void {
  }

}
