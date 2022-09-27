import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../core/model';
import { AlunosService } from '../alunos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  alunos: Observable<Aluno[]>;
  displayedColumns = ['id', 'idcurso', 'nomealuno'];

  constructor(private alunosService: AlunosService) {
    this.alunos = this.alunosService.list();
   }

  ngOnInit(): void {
  }

}
