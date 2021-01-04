import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iadmin } from '../models/Iadmin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId: string="";
  passwordValue: string="";
  constructor(private route: Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }

  public login(): void{
    let isAdminLoggedIn= this.adminService.loginAdmin(this.emailId, this.passwordValue);
    if(isAdminLoggedIn){
      this.route.navigate(['../home']);
    } 
  }
}
