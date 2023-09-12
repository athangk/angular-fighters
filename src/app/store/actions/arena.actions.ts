import { createActionGroup, props } from '@ngrx/store';
import { Fighter } from 'src/app/interfaces/fighters.interfaces';

export const ArenaActions = createActionGroup({
  source: 'Fighter',
  events: {
    'Add Fighter': props<{ fighter: Fighter }>(),
    'Remove Fighter': props<{ fighter: Fighter }>(),
  },
});
