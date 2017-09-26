import { Tournament } from '../models/Tournament';
import { Team } from '../models/Team';
import { ITeam } from '../interfaces/ITeam';
import { IKey } from '../interfaces/IKey';
import { teamMock } from '../configs/TournamentConfig';
import { sortTeams } from '../helpers/SortTeamHelper';
import { AppState } from '../stores/AppState';
import { IAppState } from '../interfaces/IAppState';
 
export class TeamManager {
  tournament: Tournament;
  key:IKey; 
  stepId:number;
  teamsPerKey: number = 2;
  lastTeamId: string;
  appState: IAppState = AppState;

  /**
   * check if all the teams have name
   */
  canClick() {
    return this.tournament.teams.every(team => team.name !== '');
  }
  /**
   * checks if a team inclues in the key
   * @param team 
   */
  teamIncludesInKey(team:ITeam) {
    return this.getAvailableTeams().includes(team);
  }
  /**
   * set last team id to the key and set the next key to the team
   * @param team 
   */
  setTeamKey(team:ITeam) {
    team.keyId = this.key.nextKey;
    this.key.lastTeamId = team.id;
  }
  /**
   * Check if every team from this key is active
   */
  areTeamsActives() {
    return this.getAvailableTeams().every(team => team.isActive);
  }
  /**
   * Fill every key with two teams and if doesnt have teams fill with a mock team
   * @param teams 
   */
  fillAvailablesTeams(teams: Array<ITeam>) {
    if (teams.length < this.teamsPerKey) {
      teams.push(
        new Team(this.key.lastTeamId || teamMock.id, teamMock.name, this.stepId, this.key.id, teamMock.isActive)
      );
      this.fillAvailablesTeams(teams);
    }
  }
  /**
   * Set all teams of current key, fill out the key and order it
   */
  getAvailableTeams() {
    const teams = []
    this.tournament.teams.forEach(team => {
      if (team.keyId === this.key.id) {
        team.nextIndex = this.key.nextIndex;
        teams.push(team);
      }
    }); 
    if(teams.length < this.teamsPerKey) {
      this.fillAvailablesTeams(teams);
    }
    return sortTeams(teams, this.tournament.teams);
  }
}
