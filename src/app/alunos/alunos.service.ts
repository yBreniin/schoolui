import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private readonly API = '/src/assets/alunos.json'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Aluno[]>(this.API);
  }
}
