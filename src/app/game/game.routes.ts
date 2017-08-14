import { Routes } from '@angular/router';

import {
  GameComponent,
  CreateGameComponent,
  GameListComponent
} from './index';

export const gameRoutes: Routes = [
  { path: 'new', component: CreateGameComponent },
  { path: ':id', component: GameComponent },
  { path: '', component: GameListComponent }
];
