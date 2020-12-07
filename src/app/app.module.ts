import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { APP_ROUTES } from './shared/app.router';

// Modulos Pages
import { PagesModulo } from './pages/pages.modulo';

// Modulos Proncipales
import { AppComponent } from './app.component'; // Inicio
import { LoginComponent } from './login/login.component'; // Login
import { RegisterComponent } from './login/register.component'; // Register
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModulo,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
