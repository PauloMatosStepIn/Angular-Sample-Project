import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CursosService } from 'src/app/services/cursos.service';
import { Curso } from '../curso';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css'],
})
export class CursoDetailComponent implements OnInit {
  public curso: Curso;
  constructor(
    private actualRoute: ActivatedRoute,
    private cursosService: CursosService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.actualRoute.snapshot.paramMap.get('id'));
    this.curso = this.cursosService.getCurso(id);
  }

  voltar (){
    this.location.back();
  }
}
