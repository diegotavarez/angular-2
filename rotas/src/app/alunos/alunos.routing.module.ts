import { AlunosGuard } from './../guards/alunos.guard';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';

//quando queremos que um componente pai seja renderizado ao mesmo tempo que o componente filho na tela, utilizamos rotas filhas

const alunosRoutes = [
  {path:'', component: AlunosComponent, 
  canActivateChild: [AlunosGuard],
  children: [
    {path:'novo',component : AlunoFormularioComponent},
    {path: ':id',component:AlunoDetalheComponent},
    {path:':id/editar',component : AlunoFormularioComponent}
  ]},

];

@NgModule(
  {
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [
      RouterModule
    ]
  }
)
export class AlunosRoutingModule{

}
