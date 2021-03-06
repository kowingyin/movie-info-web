import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthInterceptor } from './interceptors/auth.service';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FilmDetailsComponent,
    FavouriteComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
