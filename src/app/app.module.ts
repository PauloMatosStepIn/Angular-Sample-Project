import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosListaComponent } from './cursos/cursos-lista/cursos-lista.component';
import { CursosItemComponent } from './cursos/cursos-item/cursos-item.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { NavigateComponent } from './main/navigate/navigate.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CursoDetailComponent } from './cursos/curso-detail/curso-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursosListaComponent,
    CursosItemComponent,
    AboutComponent,
    MainComponent,
    NavigateComponent,
    NotFoundComponent,
    CursoDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
