export interface IUser {
  user_id: string;
  userName: string;
  lastName?: string;
  firstName: string;
  openGames?: string[];
  closedGames?: string[];
}
