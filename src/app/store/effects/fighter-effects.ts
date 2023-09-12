import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { FightersApiActions } from '../actions/fighter.actions';
import { FightersService } from '../../services/fighter.service';

@Injectable()
export class FighterEffects {
  loadFighters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FightersApiActions.fetchingFighterList),
      exhaustMap(() =>
        this.fightersService.getFighters().pipe(
          map((fighters) =>
            FightersApiActions.retrievedFighterList({ fighters })
          ),
          catchError(() => of({ type: 'Fetching Fighter Error' }))
        )
      )
    )
  );

  addFighter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FightersApiActions.insertingNewFighter),
      exhaustMap((action) =>
        this.fightersService.addFighter(action.fighter).pipe(
          map((fighter) => FightersApiActions.fighterAddedSuccess({ fighter })),
          catchError(() => of({ type: 'Fetching Fighter Error' }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private fightersService: FightersService
  ) {}
}
