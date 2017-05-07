import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule
  ],
  declarations: [
    AlunosComponent,
    AlunoFormularioComponent,
    AlunoDetalheComponent

  ],
  providers: []
})
export class AlunosModule { }
