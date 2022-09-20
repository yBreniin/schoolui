import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  list(): Aluno[] {
    return [
      {"id": 1, "idcurso": 1, "nomealuno": "Breno"},
      {"id": 2, "idcurso": 4, "nomealuno": "Beatriz"},
      {"id": 3, "idcurso": 3, "nomealuno": "Tiago"},
      {"id": 4, "idcurso": 5, "nomealuno": "Carlos"},
      {"id": 5, "idcurso": 2, "nomealuno": "Pedro"},
      {"id": 6, "idcurso": 7, "nomealuno": "Romario"},
      {"id": 7, "idcurso": 6, "nomealuno": "Oswaldo"}
    ]
  }
}
