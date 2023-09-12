import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Fighter } from 'src/app/interfaces/fighters.interfaces';
import { FighterState } from '../reducers/fighters.reducer';

export const selectFighterStateFeature =
  createFeatureSelector<FighterState>('fighters');
export const selectStateFighters = createSelector(
  selectFighterStateFeature,
  (state) => state.fighters
);

export const selectFightersLoading = createSelector(
  selectFighterStateFeature,
  (state) => state.isLoading
);

export const selectArenaStateFeature =
  createFeatureSelector<ReadonlyArray<Fighter>>('arena');

export const selectFighterArena = createSelector(
  selectArenaStateFeature,
  (arena) => {
    return arena;
  }
);

export const selectRemainingFightersArena = createSelector(
  selectStateFighters,
  selectArenaStateFeature,
  (fighters, arena) => {
    return fighters.filter(({ id: a }) => !arena.some(({ id: b }) => b === a));
  }
);

export const selectFighterById = (id: number) =>
  createSelector(selectStateFighters, (fighters) => {
    if (fighters) {
      return fighters.find((fighter) => {
        return fighter.id === id;
      });
    }
    return {};
  });
