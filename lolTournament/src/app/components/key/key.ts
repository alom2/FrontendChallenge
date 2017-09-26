import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Tournament } from '../../../models/Tournament';
import { TeamManager } from '../../../models/TeamManager';
import { Team } from '../../../models/Team';
import { ITeam } from '../../../interfaces/ITeam';
import { IKey } from '../../../interfaces/IKey';
import { teamMock } from '../../../configs/TournamentConfig';
import { sortTeams } from '../../../helpers/SortTeamHelper';
import { AppState } from '../../../stores/AppState';
import { IAppState } from '../../../interfaces/IAppState';
 
@Component({
  selector: 'key',
  templateUrl: './key.html',
  styleUrls: ['./key.scss']
})
export class Key extends TeamManager {
  @Input('tournament') tournament: Tournament;
  @Input('key') key:IKey; 
  @Input('stepId') stepId:number;
  @Output() tournamentChange = new EventEmitter();
  teamsPerKey: number = 2;
  lastTeamId: string;
  appState: IAppState = AppState;

  /**
   * Set team next keyId
   * @param teamId 
   */
  setKeyWinner(teamId:string) {
    if (!this.canClick()) {
      this.appState.sidebarIsOpen = true;
    } else if (this.areTeamsActives()) {
      this.tournament.teams.forEach(team => {
        if (teamId === team.id) {
          this.setTeamKey(team);
        } else if (this.teamIncludesInKey(team)) {
          team.isActive = false; // set loser
        }
      });
      this.tournamentChange.emit(this.tournament);
    }
  }

}
