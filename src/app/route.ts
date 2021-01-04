import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LoginAuthguardService } from "./services/login-authguard.service";
import { SignupComponent } from "./signup/signup.component";

export const route: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate: [LoginAuthguardService]}
]
  