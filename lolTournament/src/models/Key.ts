import { Team } from './Team';
import { ITeam } from '../interfaces/ITeam';

export class Key {
  id: number;
  teams?: Array<Team>;

  constructor(id: number, teams?: Array<ITeam>) {
    this.id = id;
    this.setTeams(teams);
  }
  /**
   * Make sure that keys will be an array of intances of Key 
   * @param teams 
   */
  setTeams(teams: Array<ITeam>) {
    if (teams.length > 0) {
      this.teams = teams.map(team => new Team(team.id, team.name, team.isActive));
    }
  }

}