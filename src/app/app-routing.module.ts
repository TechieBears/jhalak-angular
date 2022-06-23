import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login-register/login/login.component';
import { RegisterComponent } from './pages/login-register/register/register.component';
import { UserComponent } from './pages/login-register/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  
  {
    path: 'user',
    component: UserComponent, 
  //   canActivate: [AuthGuard], data: { roles: ['USER']
  // },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      { path: 'home', component:HomeComponent },
      { path: 'userlogin', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
