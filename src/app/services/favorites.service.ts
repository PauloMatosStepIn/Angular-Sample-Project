import { Injectable } from '@angular/core';
import { Curso } from '../cursos/curso';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  public myFavorites:Curso[] = [];
  constructor() {}

  getMyFavorites() {
    return this.myFavorites.slice();
  }

  add(curso: Curso) {
    this.myFavorites.push(curso);
    console.log(this.myFavorites);
    
  }
}
