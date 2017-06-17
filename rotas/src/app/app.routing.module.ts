import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AlunosGuard } from './guards/alunos.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';

const appRoutes: Routes = [
  //utilizando lazy loading para cursos
  {path: 'cursos',
  loadChildren:'app/cursos/cursos.module#CursosModule',
  canActivate: [AuthGuard],
  canActivateChild: [CursosGuard],
  canLoad: [AuthGuard]},

  {path: 'alunos', loadChildren:'app/alunos/alunos.module#AlunosModule',
  canActivate: [AuthGuard],
  canLoad: [AuthGuard]
  //canActivateChild: [AlunosGuard]
  },

  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent,
  canActivate: [AuthGuard] },

  { path: '', redirectTo: '/home', pathMatch: 'full'},

  { path: '**', component: PaginaNaoEncontradaComponent}
  //canActivate: [AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}
