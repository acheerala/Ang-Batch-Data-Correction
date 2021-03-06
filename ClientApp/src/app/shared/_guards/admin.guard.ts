import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

constructor(public authService: AuthService,public router: Router)
{
}

canActivate (next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
{
    if (!this.authService.isSuperAdmin)
    {
      this.router.navigate(['']);    
      return false;
    }
    return true;
}

canActivateChild( next: ActivatedRouteSnapshot,  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
{
  // redirect and return false
    if (!this.authService.isLoggedIn)
    {
      this.router.navigate(['']);
      return false;
    }
   return true;
}
}
