export const FILTER_USERS = 'users/FILTER';

export function filterUsers(searchText: string) {
  return {
    type: FILTER_USERS,
    searchText,
  };
}
