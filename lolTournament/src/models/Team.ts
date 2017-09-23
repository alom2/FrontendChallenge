export class Team {

  id: string;
  name: string;
  isActive: boolean;

  constructor(id: string, name: string, isActive?:boolean) {
    this.id = id;
    this.name = name;
    this.isActive = isActive || true;
  }

}