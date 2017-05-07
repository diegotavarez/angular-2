import { MaterializeModule } from 'angular2-materialize';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { routing } from './app.routing';

// import { CursosModule } from './cursos/cursos.module';

import { AppRoutingModule } from './app.routing.module';
// import { AlunosModule } from './alunos/alunos.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //CursosModule foi removido porque estamos usando o lazy loading para este modulo
    // CursosModule,
    // AlunosModule,
    AppRoutingModule

    // routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
