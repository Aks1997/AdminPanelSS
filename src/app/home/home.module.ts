import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { RouterModule } from '@angular/router';
import { route } from './home-route';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ CreateUserComponent, ShowUserComponent, DynamicTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    RouterModule.forChild(route)
  ]
})
export class HomeModule { }
