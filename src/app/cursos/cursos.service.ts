// metodos e funções com a api (conexão)
import { HttpClient } from '@angular/common/http';
// A maioria dos aplicativos de front-end precisa se comunicar com um servidor por meio do protocolo HTTP, para baixar ou carregar dados e acessar outros serviços de back-end.
import { Injectable } from '@angular/core';
import { Curso } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  list(): Curso[] {
    return [
      {"id": 1, "nomecurso": "Desenvolvimento de Sistemas"},
      {"id": 2, "nomecurso": "Química"},
      {"id": 3, "nomecurso": "Administração"},
      {"id": 4, "nomecurso": "Contabilidade"},
      {"id": 5, "nomecurso": "Logística"},
      {"id": 6, "nomecurso": "Marketing"},
      {"id": 7, "nomecurso": "Edificações"}
    ]
  }
}

