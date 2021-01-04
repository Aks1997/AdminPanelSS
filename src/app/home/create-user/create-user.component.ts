import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/Iuser';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: Iuser;

  constructor(private route: Router) { 
    this.user={
      name:"",
      age: 0,
      emailId: "",
      sex: ""
    }
  }

  ngOnInit(): void {
  }

  createUser(){
    let jsonUsers= localStorage.getItem("users");
    let users:Iuser[] = jsonUsers? JSON.parse(jsonUsers): [];
    users.push(this.user); 
    this.user = {
      name:"",
      age: 0,
      emailId: "",
      sex: ""
    };
    localStorage.setItem('users',JSON.stringify(users));
    this.route.navigate(['../home/show']);
  }
}
