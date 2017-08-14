import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  GameListComponent,
  CreateGameComponent,
  GameComponent
} from './index';

import { gameRoutes } from './game.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(gameRoutes)
  ],
  declarations: [
    CreateGameComponent,
    GameComponent,
    GameListComponent
  ]
})
export class GameModule { }
