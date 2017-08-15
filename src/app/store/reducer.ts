import { games } from './../../Data/games';
import { users } from './../../Data/users';
import { IAppState } from './IAppState.model';
import { FILTER_USERS } from './actions';
import { REQUEST_GAMES_SUCCESS } from './../game/game.actions';
import { LOGIN_SUCCESS } from './../loginRegister/login.action';

const initialState: IAppState = {
  users,
  filteredUsers: users,
  games,
  currentUser: null
};

function filterUsers(state, action): IAppState {
  return Object.assign({}, state, {
    filteredUsers: state.users.filter(user => user.userName.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1),
  });
}

function listGames(state, action): IAppState {
  return Object.assign({}, state, {
    games: action.games
  });
}

function login(state, action): IAppState {
  return Object.assign({}, state, {
    currentUser: action.currentUser
  });
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_USERS:
      return filterUsers(state, action);
    case REQUEST_GAMES_SUCCESS:
      return listGames(state, action);
    case LOGIN_SUCCESS:
      return login(state, action);
    default:
      return state;
  }
}
