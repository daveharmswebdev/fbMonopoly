import { games } from './../../Data/games';
import { users } from './../../Data/users';
import { IAppState } from './IAppState.model';
import { FILTER_USERS } from './actions';

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
