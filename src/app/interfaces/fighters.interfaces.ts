import { FormControl } from '@angular/forms';

export interface Fighter {
  id: number;
  name: string;
  image: string;
  stats: FighterStats;
  story: string;
}

interface FighterStats {
  kick: number;
  weapon: number;
  fist: number;
}

export interface FighterImageList {
  value: string;
  option: string;
}

export interface FighterRegistration {
  name: FormControl<string>;
  image: FormControl<string>;
  story: FormControl<string>;
  kick: FormControl<number>;
  fist: FormControl<number>;
  weapon: FormControl<number>;
}
