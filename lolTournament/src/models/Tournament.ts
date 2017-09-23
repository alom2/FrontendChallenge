import { Step } from './Step';

export class Tournament {

  steps:Array<Step>

  constructor(steps:Array<Step>) {
    this.setSteps(steps);
  }
  /**
   * Make sure that steps will be an array of intances of Step
   * @param steps 
   */
  setSteps(steps:Array<Step>) {
    this.steps = steps.map(step => new Step(step.id, step.keys));
  }
}