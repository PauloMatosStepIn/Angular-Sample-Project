import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CursoDetailComponent } from './cursos/curso-detail/curso-detail.component';
import { CursosComponent } from './cursos/cursos.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: '', redirectTo: 'cursos', pathMatch: 'full' },
  { path: 'curso/:id', component: CursoDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
