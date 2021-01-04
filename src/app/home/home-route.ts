import { Routes } from "@angular/router";
import { CreateUserComponent } from "./create-user/create-user.component";
import { ShowUserComponent } from "./show-user/show-user.component";

export const route: Routes = [
    {path: '', redirectTo: 'show', pathMatch: 'full'},
    {path: 'create', component: CreateUserComponent},
    {path: 'show', component: ShowUserComponent},
]
  