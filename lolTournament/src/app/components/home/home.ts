import { Component, OnInit } from '@angular/core';

import { getProperty } from '../../../helpers/StorageHelper';
import { Tournament } from '../../../models/Tournament';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  tournament:Tournament;

  ngOnInit() {
    const tournament = getProperty('tournament');
    if (tournament) {
      this.tournament = new Tournament(tournament);
    }
  }

}
