import { Injectable} from '@angular/core';
import {Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { isNullOrUndefined } from 'util';
import { AdalService } from 'app/adal.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public router: Router, private adal: AdalService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.adal.isAuthenticated) {
      return true;
    } else {
      const url = state.url;
      if (!isNullOrUndefined(url) && url !== '') {
        // save link in local storage for redirection
        localStorage.setItem('redirectUrl', url);
      }
      this.router.navigate(['login']);
      return false;
    }
  }
}

