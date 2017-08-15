import { IGame } from './../game/models/game.model';
import { IUser } from '../user/user.model';
import { IAppState } from './IAppState.model';
import { FILTER_USERS } from './actions';

const users = [
  {
    user_id: 'a1',
    userName: 'dave',
    lastName: 'Harms',
    firstName: 'Dave',
    openGames: ['g1']
  },
  {
    user_id: 'a2',
    userName: 'scooter',
    lastName: 'Smith',
    firstName: 'Danny',
    openGames: ['g1']
  },
  {
    user_id: 'b2',
    userName: 'marianna',
    firstName: 'Marianna',
    openGames: ['g1']
  }
];

const games: IGame[] = [
  {
    game_id: 'g1',
    player_1: {
      user_id: 'a1',
      avatar: 'shoe',
      money: 1500,
      properties: [],
      position: 0
    },
    player_2: {
      user_id: 'b2',
      avatar: 'terrier',
      money: 1500,
      properties: [],
      position: 0
    },
    create_date: new Date('8/12/2017')
  },
  {
    game_id: 'g2',
    player_1: {
      user_id: 'a1',
      avatar: 'shoe',
      money: 1500,
      properties: [],
      position: 0
    },
    player_2: {
      user_id: 'b2',
      avatar: 'terrier',
      money: 1500,
      properties: [],
      position: 0
    },
    create_date: new Date('8/13/2017')
  }
];

const initialState: IAppState = {
  users,
  filteredUsers: users,
  games
};

function filterUsers(state, action): IAppState {
  return Object.assign({}, state, {
    filteredUsers: state.users.filter(user => user.userName.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1),
  });
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_USERS:
      return filterUsers(state, action);
    default:
      return state;
  }
}
