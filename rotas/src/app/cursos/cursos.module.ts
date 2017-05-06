import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//nao precisa desse modulo porque o CursosRoutingModule ja o importa
// import { RouterModule } from '@angular/router';

import { CursosRoutingModule } from './cursos.routing.module';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
