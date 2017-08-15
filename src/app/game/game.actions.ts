import { GameService } from './game.service';
import { IAppState } from './../store/IAppState.model';
import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';

export const REQUEST_GAMES_SUCCESS = 'games/REQUEST_GAMES_SUCCESS';
export const ADD_GAMES_SUCCESS = 'games/ADD_GAMES_SUCCESS'; 

@Injectable()
export class GameActions {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private gameService: GameService
  ) {}

  getGames() {
    this.gameService.getGames()
    .subscribe(games => {
      this.ngRedux.dispatch({
        type: REQUEST_GAMES_SUCCESS,
        games
      });
    });
  }

}
