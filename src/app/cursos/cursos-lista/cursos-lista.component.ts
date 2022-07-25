import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
})
export class CursosListaComponent implements OnInit {
  @Input() public cursos: Curso[] = [];
  @Input() public tituloLista = '';

  constructor() {}

  ngOnInit(): void {}

  //To Avoid compilation errors
  //Change the method parameter datatype from event to any as below.

  //Vamos usar Services em vez de EventEmiter

  // makeItemFavorite(event: any) {
  //   alert(`${event.nome} is One of my Favorite Courses !!!`);

  // }
}
