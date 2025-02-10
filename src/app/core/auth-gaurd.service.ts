import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd  implements CanActivate{

  constructor(private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      const islogin = localStorage.getItem('islogin');
      if(!islogin){
        return this.router.navigate(['/login']);
      } 

      return true
  }
}
