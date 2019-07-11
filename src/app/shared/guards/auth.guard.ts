import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router){}

  canActivate() {

  /* TODO: Codigo checking usuario */
    this.route.navigate(['/login']);
    return false; // False denegado, true ok
  }



}
