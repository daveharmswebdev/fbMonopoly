import { IGame } from './../app/game/models/game.model';

export const games: IGame[] = [
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
