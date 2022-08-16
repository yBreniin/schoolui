import { Component, OnInit } from '@angular/core';
import CursosJson from '../../../assets/cursos.json';

interface CursosJson {
  id: number;
  nomecurso: string;
}



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nomecurso'];
  dataSource = CursosJson;
  constructor() { }

  ngOnInit(): void {
  }

}
