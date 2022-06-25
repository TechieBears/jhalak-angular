import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common-pages/footer/footer.component';
import { TopnavComponent } from './common-pages/topnav/topnav.component';
import { LoginComponent } from './pages/login-register/login/login.component';
import { RegisterComponent } from './pages/login-register/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AstrologyComponent } from './pages/astrology-pages/astrology/astrology.component';
import { CarouselComponent } from './common-pages/carousel/carousel.component';
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TopnavComponent,
    FooterComponent,
    HomeComponent,
    AstrologyComponent,
    CarouselComponent,
    
     
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
