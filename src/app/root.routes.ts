import { Routes } from '@angular/router';

import { LoginComponent } from './loginRegister/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const rootRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'game', loadChildren: './game/game.module#GameModule' }
];
