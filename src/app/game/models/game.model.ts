export interface IGame {
  game_id: string;
  player_1: IPlayer;
  player_2: IPlayer;
  player_3?: IPlayer;
  player_4?: IPlayer;
  create_date: Date;
  complete_date?: Date;
}

export interface IPlayer {
  user_id: string;
  avatar: string;
  money: number;
  properties: number[];
  position: number;
}
