import { Component } from '@angular/core';

import { AppState } from '../../../stores/AppState';

@Component({
  selector: 'main-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  title:string = 'League of Tournament';
  AppState: { sidebarIsOpen:boolean } = AppState;

  /**
   * Toggles sidebar using AppState
   */
  toggleSidebar() {
    this.AppState.sidebarIsOpen = !this.AppState.sidebarIsOpen;
  }

}
