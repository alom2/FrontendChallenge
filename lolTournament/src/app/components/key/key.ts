import { Component, Input, OnInit } from '@angular/core';

import { getProperty } from '../../../helpers/StorageHelper';
import { Tournament } from '../../../models/Tournament';
import { Team } from '../../../models/Team';
import { ITeam } from '../../../interfaces/ITeam';
import { teamMock } from '../../../configs/TournamentConfig';
 
@Component({
  selector: 'key',
  templateUrl: './key.html',
  styleUrls: ['./key.scss']
})
export class Key implements OnInit{
  @Input('teams') teams: Array<ITeam>;
  @Input('keyId') keyId:number; 
  @Input('stepId') stepId:number; 
  availablesTeams: Array<ITeam> = [];
  teamsPerKey: number = 2;

  ngOnInit() {
    this.setTeams(this.teams);
    this.fillAvailablesTeams(this.availablesTeams);
  }

  setTeams(teams: Array<ITeam>) {
    teams.forEach(team => {
      if (team.keyId === this.keyId && this.stepId === team.stepId) {
        this.availablesTeams.push(team);
      }
    });
  }

  fillAvailablesTeams(teams: Array<ITeam>) {
    if (teams.length < this.teamsPerKey) {
      this.availablesTeams.push(
        new Team(teamMock.id, teamMock.name, this.stepId, this.keyId, teamMock.isActive)
      );
      this.fillAvailablesTeams(this.availablesTeams);
    }
  }
  
}
