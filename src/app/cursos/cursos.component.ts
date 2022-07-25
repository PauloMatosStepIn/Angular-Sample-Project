import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { FavoritesService } from '../services/favorites.service';
import { Curso } from './curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService],
})
export class CursosComponent implements OnInit {
  public dadosCurso: Curso[];
  public dadosFavorites: Curso[] = [];
  totalLikes: number;
  public NextCursos = 'Próximos Cursos';
  public FavCursos = 'Cursos Favoritos';

  constructor(
    private cursosService: CursosService,
    private favoritesService: FavoritesService
  ) {
    this.totalLikes = 0;
    this.dadosCurso = [];
  }

  ngOnInit(): void {
    this.dadosCurso = this.cursosService.getCursos();
    this.cursosService.cursoLiked.subscribe((curso: Curso) => {
      this.totalLikes++;
    });
    this.cursosService.cursoFavorite.subscribe((curso: Curso) => {
      this.favoritesService.add(curso);
      this.dadosFavorites = this.favoritesService.getMyFavorites();
    });
  }
}
