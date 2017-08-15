import { IGame } from './../game/models/game.model';
import { IUser } from '../user/user.model';
import { IAppState } from './IAppState.model';

export interface IAppState {
  users: IUser[];
  filteredUsers: IUser[];
  games: IGame[];
}
