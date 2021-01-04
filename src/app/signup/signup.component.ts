import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iadmin } from '../models/Iadmin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  admin: Iadmin;
  confirmPass: string;
  isPassMatch: boolean= true;

  constructor(private adminService: AdminService, private router: Router) { 
    this.admin={
      name:"",
      emailId:"",
      password: "",
      isAuthenticated: false
    }
  }

  ngOnInit(): void {
  }

  matchPassword(event){
    this.confirmPass= event;
    if(this.confirmPass===this.admin.password){
      this.isPassMatch= true;
    }else{
      this.isPassMatch= false;
    }
  }

  public onSubmit(): void{
    let response= this.adminService.registerAdmin(this.admin);
    this.router.navigate(['login']);
  }
}
