import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss']
})
export class Button {
  @Input('text') buttonText: string;
  @Input('size') buttonSize: string;

}
