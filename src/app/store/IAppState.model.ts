import { IUser } from '../user/user.model';
import { IAppState } from './IAppState.model';

export interface IAppState {
  users: IUser[];
  filteredUsers: IUser[];
}
