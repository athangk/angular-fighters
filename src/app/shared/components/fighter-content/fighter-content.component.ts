import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fighter } from 'src/app/interfaces/fighters.interfaces';

@Component({
  selector: 'app-fighter-content',
  templateUrl: './fighter-content.component.html',
  styleUrls: ['./fighter-content.component.scss'],
})
export class FighterContentComponent {
  @Input() fighter: Readonly<Fighter>;
  @Output() chosenFighter = new EventEmitter<Fighter>();
  @Input() buttonActionType?: Readonly<string>;
  @Input() isDetailMode?: Readonly<boolean>;
}
