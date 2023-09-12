import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Store } from '@ngrx/store';
import {
  FightersApiActions,
  FightersActions,
} from 'src/app/store/actions/fighter.actions';
import {
  selectRemainingFightersArena,
  selectFightersLoading,
} from 'src/app/store/selectors/fighters.selectors';

import { Fighter } from 'src/app/interfaces/fighters.interfaces';

import { MatDialog } from '@angular/material/dialog';
import { CreateFighterDialogComponent } from './create-fighter-dialog/create-fighter-dialog.component';

@Component({
  selector: 'app-fighter-list',
  templateUrl: './fighter-list.component.html',
  styleUrls: ['./fighter-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FighterListComponent implements OnInit {
  hasData: boolean = false;
  fighters$ = this.store.select(selectRemainingFightersArena);
  isLoading$ = this.store.select(selectFightersLoading);

  constructor(private store: Store, public dialog: MatDialog) {}

  getFighterData(): void {
    this.store.dispatch(FightersApiActions.fetchingFighterList());
  }

  ngOnInit(): void {
    this.fighters$.subscribe((fighters) => {
      if (fighters.length === 0) {
        this.getFighterData();
      }
    });
  }

  createFighter(fighter: Fighter): void {
    this.store.dispatch(FightersApiActions.insertingNewFighter({ fighter }));
  }

  addFighter(fighter: Fighter): void {
    this.store.dispatch(FightersActions.addFighter({ fighter }));
  }

  trackByFn(_index: number, item: Fighter): string {
    return item.name;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateFighterDialogComponent, {
      data: {},
      panelClass: 'modalbox-create-fighter',
    });

    dialogRef.afterClosed().subscribe((fighter: Fighter) => {
      if (fighter) {
        const updatedFighter = {
          ...fighter,
        };

        this.createFighter(updatedFighter);
      } else {
      }
    });
  }
}
