import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './../login/auth.service';

@Injectable()
export class AlunosGuard implements CanActivateChild {
    constructor(
      private authService: AuthService
    ) { }

  	canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
      
      if(state.url.includes('editar')){
        //alert('Você não tem permissão para editar este item');
        //return Observable.of(false);
      }
      //console.log('Guarda de rota filha');
      
      return true;
    }
}
