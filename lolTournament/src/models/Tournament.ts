import { Step } from './Step';
import { Team } from './Team';
import { IStep } from '../interfaces/IStep';
import { ITeam } from '../interfaces/ITeam';

export class Tournament {

  steps: Array<Step>;
  teams: Array<Team>;

  constructor(steps:Array<IStep>, teams:Array<ITeam>) {
    this.setSteps(steps);
    this.setTeams(teams);
  }
  /**
   * Make sure that steps will be an array of intances of Step
   * @param steps 
   */
  setSteps(steps:Array<IStep>) {
    this.steps = steps.map(step => new Step(step.id, step.keys));
  }
  /**
   * Make sure that teams will be an array of intances of Team
   * @param teams 
   */
  setTeams(teams:Array<ITeam>) {
    this.teams = teams.map(team =>
      new Team(team.id, team.name, team.stepId, team.keyId, team.isActive));
  }

  /**
   * Travels for all steps and keys changing the name of the team
   * @param teamId 
   * @param teamName 
   */
  setTeamName(teamId:string, teamName:string) {
    this.teams.forEach(team => {
        if(team.id === teamId) {
          team.setName(teamName);
        }
    })
  }
}
