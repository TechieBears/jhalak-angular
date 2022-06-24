import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstrologyComponent } from './pages/astrology-pages/astrology/astrology.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login-register/login/login.component';
import { RegisterComponent } from './pages/login-register/register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',component: AstrologyComponent,},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
