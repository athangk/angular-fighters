import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Fighter } from 'src/app/interfaces/fighters.interfaces';
import { FightersActions } from 'src/app/store/actions/fighter.actions';
import { selectFighterArena } from 'src/app/store/selectors/fighters.selectors';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

type FightChoise = 'kick' | 'fist' | 'weapon';

enum FightChoiseEnum {
  kick,
  fist,
  weapon,
}

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss'],
})
export class ArenaComponent {
  @Output() remove = new EventEmitter<Fighter>();
  fightersArena: Fighter[];
  countRound: number = 0;

  fightersArena$ = this.store.select(selectFighterArena);
  fightRounds: string[];
  winner: Fighter;

  constructor(private store: Store, public dialog: MatDialog) {}
  trackByFn(index: number, _item: Fighter | string) {
    return index;
  }

  ngOnInit(): void {
    this.fightersArena$.subscribe((fighters) => {
      this.fightersArena = [...fighters];
    });
  }

  removeFighter(fighter: Fighter): void {
    this.store.dispatch(FightersActions.removeFighter({ fighter }));
  }

  fight(): void {
    this.fightRounds = [];

    this.countRound++;

    const initialValueObj = this.fightersArena[0];

    const compareWithInitial = this.fightersArena.reduce(
      (accumulator, currentValue) => {
        const randomProperty: FightChoise = FightChoiseEnum[
          Math.floor(Math.random() * 3)
        ] as FightChoise;
        this.fightRounds.push(randomProperty);

        const result =
          accumulator.stats[randomProperty] < currentValue.stats[randomProperty]
            ? currentValue
            : accumulator;

        return result;
      },
      initialValueObj
    );

    this.winner = compareWithInitial;
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.fightersArena,
      event.previousIndex,
      event.currentIndex
    );
  }
}
