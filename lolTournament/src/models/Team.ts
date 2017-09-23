import { Player } from './Player';

export class Team {

  id: number;
  name: string;
  isActive: boolean;
  players: Array<Player>;
  currentStep: number;

  constructor(id: number, name: string, players: Array<Player>) {
    this.id = id;
    this.name = name;
    this.isActive = false;
    this.currentStep = -1;
    this.setPlayers(players);
  }

  /**
   * Set an Array of Players
   * 
   * @param players 
   */
  setPlayers(players: Array<Player>) {
    this.players = players.map(
      player => new Player(player.id, player.name)
    );
  }

  /**
   * Changes the name of a specific Player
   * 
   * @param id 
   * @param name 
   */
  changePlayer(id:number, name:string) {
    this.players = this.players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          name,
        };
      }
      return player;
    });
  }

}