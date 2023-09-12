import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Fighter } from 'src/app/interfaces/fighters.interfaces';

export const FightersActions = createActionGroup({
  source: 'Fighters',
  events: {
    'Add Fighter': props<{ fighter: Fighter }>(),
    'Remove Fighter': props<{ fighter: Fighter }>(),
  },
});

export const FightersApiActions = createActionGroup({
  source: 'Fighters API',
  events: {
    'Retrieved Fighter List': props<{
      fighters: ReadonlyArray<Fighter>;
    }>(),
    'Inserting New Fighter': props<{ fighter: Fighter }>(),
    'Fetching Fighter List': emptyProps(),
    'Fetching Fighter Error': emptyProps(),
    'Fighter Added Success': props<{ fighter: Readonly<Fighter> }>(),
  },
});
