import { Component, Input, Output, EventEmitter } from '@angular/core';

import { getProperty } from '../../../helpers/StorageHelper';
import { Tournament } from '../../../models/Tournament';
import { AppState } from '../../../stores/AppState';
import { steps } from '../../../configs/TournamentConfig';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class Sidebar {
   /**
   * Gets tournament from Home to always look for the same object
   */
  @Input('tournament') tournament:Tournament|null;
  /**
   * Returns the change of tournament
   */
  @Output() tournamentChange = new EventEmitter();

  AppState: { sidebarIsOpen:boolean } = AppState;
  /**
   * Toggles visibility of sidebar
   */
  toggleSidebar() {
    this.AppState.sidebarIsOpen = !this.AppState.sidebarIsOpen;
  }

  createTournament() {
    this.tournament = new Tournament(steps);
    this.tournamentChange.emit(this.tournament);
  }
}
