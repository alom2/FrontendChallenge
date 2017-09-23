import { Team } from './Team';

export class Key {
  id: number;
  stepId: number;
  teams: Array<Team>;

  constructor(id: number, stepId: number, teams?: Array<Team>) {
    this.id = id;
    this.stepId = stepId;
    this.setTeams(teams);
  }
  /**
   * Make sure that keys will be an array of intances of Key 
   * @param teams 
   */
  setTeams(teams: Array<Team>) {
    if (teams.length > 0) {
      this.teams = teams.map(team => new Team(team.id, team.name, team.isActive));
    }
  }

}