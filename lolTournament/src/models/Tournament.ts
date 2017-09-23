import { Step } from './Step';
import { IStep } from '../interfaces/IStep';

export class Tournament {

  steps:Array<Step>

  constructor(steps:Array<IStep>) {
    this.setSteps(steps);
  }
  /**
   * Make sure that steps will be an array of intances of Step
   * @param steps 
   */
  setSteps(steps:Array<IStep>) {
    this.steps = steps.map(step => new Step(step.id, step.keys));
  }

  /**
   * Travels for all steps and keys changing the name of the team
   * @param teamId 
   * @param teamName 
   */
  setTeamName(teamId:string, teamName:string) {
    this.steps.forEach(step => {
      step.keys.forEach(key => {
        key.teams.forEach(team => {
          if(team.id === teamId) {
            team.setName(teamName);
          }
          return team;
        })
      })
    })
  }
}