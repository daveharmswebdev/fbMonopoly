import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './loginRegister/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { rootRoutes } from './root.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
