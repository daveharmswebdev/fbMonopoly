import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { GameService } from './game.service';
import { GameActions } from './game.actions';


@Component({
  template: `
  <h1>Game List</h1>
  <ul>
    <li *ngFor="let game of games$ | async">{{game.game}} and {{game.email}}</li>
  </ul>
  `
})
export class GameListComponent implements OnInit {
  @select('games') games$: Observable<any[]>;

  constructor(
    private gameService: GameService,
    private gameActions: GameActions
  ) {}

  ngOnInit() {
    this.gameActions.getGames();
  }
}
