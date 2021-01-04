import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/models/Iuser';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  headerColumns: string[]= ['name','age','sex','emailId']
  dataColumns: Iuser[]= [
    {
      name: 'Akhil Chauhan',
      age: 23,
      sex: 'Male',
      emailId: 'abc@gmail.com'
    },
    {
      name: 'Akhil',
      age: 24,
      sex: 'Male',
      emailId: 'abc@gmail.com'
    },
    {
      name: 'Chauhan',
      age: 27,
      sex: 'Male',
      emailId: 'asd@gmail.com'
    },
    {
      name: 'Qwerty',
      age: 20,
      sex: 'Female',
      emailId: 'abcqwe@gmail.com'
    },
  ]
  constructor() { 
    const users = JSON.parse(localStorage.getItem('users'));
    this.dataColumns.push(...users);
  }

  ngOnInit(): void {
    
  }

}
