import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  template: `
  <h1>Create Game</h1>
  <button class="btn btn-default" (click)="addGame()">Add Game</button>
  `
})
export class CreateGameComponent {

  constructor(private gameService: GameService) {}

  addGame() {
    this.gameService.addGame('c1');
  }
}
