import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthguardService implements CanActivate {

  constructor(private adminService: AdminService, private route: Router) { }

  canActivate() {
    if(!this.adminService.isAuthenticated()){
      this.route.navigate(['../login']);
      return false;
    }
    return true;
  }
}
