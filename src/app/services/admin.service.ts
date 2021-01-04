import { Injectable } from '@angular/core';
import { Iadmin } from '../models/Iadmin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _loggedInAdmin: Iadmin;

  constructor() { }

  public get loggedInAdmin(): Iadmin {
    return this._loggedInAdmin;
  }
  public set loggedInAdmin(value: Iadmin) {
    this._loggedInAdmin = value;
  }

  public registerAdmin(admin: Iadmin): boolean{
    try{
      localStorage.setItem(admin.emailId, JSON.stringify(admin));
    }catch(err){
      return false;
    }
    return true;
  }

  public loginAdmin(emailId: string, password: string): boolean{
    let admin: Iadmin=null;
    try{
      const parsedData = localStorage.getItem(emailId);
      admin = JSON.parse(parsedData);
      if(admin.password===password){
        admin.isAuthenticated= true;
        this.loggedInAdmin= admin;
      }
    }catch(err){
      this.loggedInAdmin= null;
      return false;
    }
    return true;
  }

  public isAuthenticated(){
    return this._loggedInAdmin ?this._loggedInAdmin.isAuthenticated: false;
  }
}
