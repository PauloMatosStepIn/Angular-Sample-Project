import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-item',
  templateUrl: './cursos-item.component.html',
  styleUrls: ['./cursos-item.component.css'],
})
export class CursosItemComponent implements OnInit {
  @Input() public curso: Curso;
  @Output() madeFavorite = new EventEmitter<Curso>();
  private fontSizeEsgotadas = 24;
  public alunoActual: string = '';
  public counter: number;

  constructor(private cursoService: CursosService) {
    this.counter = 0;
  }

  ngOnInit(): void {
    console.log('on init');
  }

  ngOnChanges(): void {
    console.log('on changes');
  }

  ngDoCheck(): void {
    console.log('on check');
  }

  ngAfterContentInit() {
    console.log('on AfterContentInit');
  }

  makeFavorite() {
    // this.madeFavorite.emit(this.curso);
    // alert(`${this.curso.nome} is One of my Favorite Courses !!!`)

    this.cursoService.cursoFavorite.emit(this.curso);

  }

  likeIt() {
    this.counter++;
    this.cursoService.cursoLiked.emit(this.curso);
  }
}
