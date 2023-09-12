import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectFighterArena,
  selectRemainingFightersArena,
} from 'src/app/store/selectors/fighters.selectors';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss'],
})
export class MainToolbarComponent {
  fighters$ = this.store.select(selectRemainingFightersArena);
  arena$ = this.store.select(selectFighterArena);

  badgeNumberFighters: number;
  badgeNumberArena: number;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fighters$.subscribe((fighterRes) => {
      this.badgeNumberFighters = fighterRes.length;
    });
    this.arena$.subscribe((fighterRes) => {
      this.badgeNumberArena = fighterRes.length;
    });
  }
}
