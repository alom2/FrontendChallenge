export class Team {

  id: number;
  name: string;
  isActive: boolean;

  constructor(id: number, name: string, isActive?:boolean) {
    this.id = id;
    this.name = name;
    this.isActive = isActive || true;
  }

}