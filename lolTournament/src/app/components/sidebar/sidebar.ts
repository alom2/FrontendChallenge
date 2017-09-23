import { Component, Input } from '@angular/core';

import { getProperty } from '../../../helpers/StorageHelper';
import { Tournament } from '../../../models/Tournament';
import { AppState } from '../../../stores/AppState';

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
  AppState: { sidebarIsOpen:boolean } = AppState;
  /**
   * Toggles visibility of sidebar
   */
  toggleSidebar() {
    this.AppState.sidebarIsOpen = !this.AppState.sidebarIsOpen;
  }

}
