import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { AlunoFormularioComponent } from './../alunos/aluno-formulario/aluno-formulario.component';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormularioComponent> {

        canDeactivate(
            component: AlunoFormularioComponent,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            console.log('guarda de desativação');

            return component.podeMudarRota();
    }
}