import { createReducer, on } from '@ngrx/store';
import { FightersActions } from '../actions/fighter.actions';
import { Fighter } from 'src/app/interfaces/fighters.interfaces';

export const initialState: ReadonlyArray<Fighter> = [];

export const arenaReducer = createReducer(
  initialState,
  on(FightersActions.removeFighter, (state, { fighter }) => {
    return state.filter((item) => item.id !== fighter.id);
  }),
  on(FightersActions.addFighter, (state, { fighter }) => {
    return [...state, fighter];
  })
);
