import { AuthService } from './../shared/auth.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class GameService {

  constructor(
    private authService: AuthService,
    public db: AngularFireDatabase
  ) {}

  getGames() {
    return this.db.list('/topics');
  }

  addGame(game) {
    const newGame = {
      email: this.authService.getCurrentUser().email,
      game,
      creationDate: new Date()
    };
    this.db.list('/topics').push(newGame);
  }
}
