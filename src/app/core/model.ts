export interface Curso {
  id: number;
  nomecurso: string;
}

export interface Aluno {
  id: number;
  idcurso: number;
  nomealuno: string;
  // curso = new Curso();
}
