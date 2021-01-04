import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Iadmin } from './models/Iadmin';
import { AdminService } from './services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AdminPanelSS';
  showHeader: boolean= false;
  admin: Iadmin

  constructor(private adminService: AdminService){
  }
  ngOnInit(): void {
    this.admin = this.adminService.loggedInAdmin;
  }

  isAuthenticated(){
    return this.adminService.isAuthenticated();
  }
}
