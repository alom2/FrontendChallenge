export class Team {

  id: string;
  name: string;
  isActive: boolean;
  stepId: number;
  keyId: number;
  nextIndex?: number;

  constructor(id: string, name: string, stepId: number, keyId: number, isActive:boolean = true) {
    this.id = id;
    this.name = name;
    this.stepId = stepId;
    this.keyId = keyId;
    this.isActive = isActive;
  }

  setName(name:string) {
    this.name = name;
  }

  /**
   * set stepId only if the team isActive
   * @param stepId 
   */
  setStepId(stepId:number) {
    if (this.isActive) {
      this.stepId = stepId;
    }
  }
  /**
   * set keyId only if the team isActive
   * @param keyId
   */
  setkeyId(keyId:number) {
    if (this.isActive) {
      this.keyId = keyId;
    }
  }

}