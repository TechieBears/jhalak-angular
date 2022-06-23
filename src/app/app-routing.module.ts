import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashbord/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

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
