import { EventEmitter, Injectable } from '@angular/core';
import { Curso } from '../cursos/curso';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  public cursoLiked = new EventEmitter<Curso>();
  public cursoFavorite = new EventEmitter<Curso>();
  cursos = [
    new Curso(1,
      'JavaScript',
      'Desenvolvimento',
      20,
      '/assets/img/javascript.jpg',
      '30 Abr'
    ),
    new Curso(2,
      'TypeScript',
      'Desenvolvimento',
      20,
      '/assets/img/typescript.jpg',
      '30 Abr'
    ),
    new Curso(3,
      'Angular',
      'Desenvolvimento',
      20,
      '/assets/img/angular.jpg',
      '30 Abr'
    ),
    new Curso(4,
      'React.js',
      'Desenvolvimento',
      20,
      '/assets/img/react.jpg',
      '30 Abr'
    ),
  ];
  constructor() {}

  public getCursos() {
    //retorna uma cópia dos cursos (slice)
    return this.cursos.slice();
  }

  public getCurso(id:number):Curso {
    return this.cursos.find(curso => curso.id === id) as Curso;
  } 
}
