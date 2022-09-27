// metodos e funções com a api (conexão)
import { HttpClient } from '@angular/common/http';
// A maioria dos aplicativos de front-end precisa se comunicar com um servidor por meio do protocolo HTTP, para baixar ou carregar dados e acessar outros serviços de back-end.
import { Injectable } from '@angular/core';
import { Curso } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/src/assets/cursos.json' // ligação com api

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Curso[]>(this.API); // puxar os dados do cursos.json assets
  }
}

