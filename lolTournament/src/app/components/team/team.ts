import { Component, Input, Output, EventEmitter } from '@angular/core';

import { getProperty } from '../../../helpers/StorageHelper';
import { Tournament } from '../../../models/Tournament';
import { ITeam } from '../../../interfaces/ITeam';

@Component({
  selector: 'team',
  templateUrl: './team.html',
  styleUrls: ['./team.scss']
})
export class Team {
  @Input('team') team:ITeam;
}
