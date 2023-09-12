import { createReducer, on } from '@ngrx/store';
import { Fighter } from 'src/app/interfaces/fighters.interfaces';
import { FightersApiActions } from '../actions/fighter.actions';

export interface FighterState {
  fighters: ReadonlyArray<Fighter>;
  isLoading: boolean;
  error: boolean;
}

export const initialState: FighterState = {
  fighters: [],
  isLoading: false,
  error: false,
};

export const fightersReducer = createReducer(
  initialState,
  on(FightersApiActions.retrievedFighterList, (state, { fighters }) => {
    return { ...state, fighters, isLoading: false };
  }),
  on(FightersApiActions.fetchingFighterList, (state) => {
    return { ...state, isLoading: true };
  }),
  on(FightersApiActions.insertingNewFighter, (state) => {
    return { ...state, isLoading: true };
  }),
  on(FightersApiActions.fighterAddedSuccess, (state, { fighter }) => {
    return {
      ...state,
      fighters: [...state.fighters, fighter],
      isLoading: false,
    };
  }),
  on(FightersApiActions.fetchingFighterError, (state) => {
    return {
      ...state,
      error: true,
      isLoading: false,
    };
  })
);
