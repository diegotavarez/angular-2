import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './../login/auth.service';

@Injectable()
export class CursosGuard implements CanActivateChild {
    constructor(
      private authService: AuthService
    ) { }

  	canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
      
      console.log('Guarda de rota filha');
      
      return true;
    }
}
