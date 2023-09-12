import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Fighter } from '../interfaces/fighters.interfaces';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const fighters = [
      {
        id: 1,
        name: 'Orange',
        image: 'orange_fighter.svg',
        stats: {
          kick: 22,
          weapon: 88,
          fist: 99,
        },
        story:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida nisl at posuere pellentesque. Sed scelerisque dapibus diam nec fringilla. Suspendisse nec erat ut libero volutpat consequat. Sed pellentesque ornare dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec dictum elit. Integer vulputate dui ut molestie molestie. Vivamus semper dui non mattis blandit. Nam volutpat efficitur mi sit amet rhoncus. Donec pretium tincidunt felis sed ullamcorper. Integer sed purus semper, rhoncus ligula id, imperdiet odio.',
      },
      {
        id: 2,
        name: 'Purple',
        image: 'purple_fighter.svg',
        stats: {
          kick: 44,
          weapon: 33,
          fist: 66,
        },
        story:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida nisl at posuere pellentesque. Sed scelerisque dapibus diam nec fringilla. Suspendisse nec erat ut libero volutpat consequat. Sed pellentesque ornare dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec dictum elit. Integer vulputate dui ut molestie molestie. Vivamus semper dui non mattis blandit. Nam volutpat efficitur mi sit amet rhoncus. Donec pretium tincidunt felis sed ullamcorper. Integer sed purus semper, rhoncus ligula id, imperdiet odio.',
      },
      {
        id: 3,
        name: 'Yellow',
        image: 'yellow_fighter.svg',
        stats: {
          kick: 88,
          weapon: 77,
          fist: 44,
        },
        story:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida nisl at posuere pellentesque. Sed scelerisque dapibus diam nec fringilla. Suspendisse nec erat ut libero volutpat consequat. Sed pellentesque ornare dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec dictum elit. Integer vulputate dui ut molestie molestie. Vivamus semper dui non mattis blandit. Nam volutpat efficitur mi sit amet rhoncus. Donec pretium tincidunt felis sed ullamcorper. Integer sed purus semper, rhoncus ligula id, imperdiet odio.',
      },
      {
        id: 4,
        name: 'Ocean',
        image: 'ocean_fighter.svg',
        stats: {
          kick: 44,
          weapon: 23,
          fist: 99,
        },
        story:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida nisl at posuere pellentesque. Sed scelerisque dapibus diam nec fringilla. Suspendisse nec erat ut libero volutpat consequat. Sed pellentesque ornare dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec dictum elit. Integer vulputate dui ut molestie molestie. Vivamus semper dui non mattis blandit. Nam volutpat efficitur mi sit amet rhoncus. Donec pretium tincidunt felis sed ullamcorper. Integer sed purus semper, rhoncus ligula id, imperdiet odio.',
      },
      {
        id: 5,
        name: 'Pink',
        image: 'pink_fighter.svg',
        stats: {
          kick: 12,
          weapon: 99,
          fist: 25,
        },
        story:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida nisl at posuere pellentesque. Sed scelerisque dapibus diam nec fringilla. Suspendisse nec erat ut libero volutpat consequat. Sed pellentesque ornare dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec dictum elit. Integer vulputate dui ut molestie molestie. Vivamus semper dui non mattis blandit. Nam volutpat efficitur mi sit amet rhoncus. Donec pretium tincidunt felis sed ullamcorper. Integer sed purus semper, rhoncus ligula id, imperdiet odio.',
      },
      {
        id: 6,
        name: 'Blue',
        image: 'blue_fighter.svg',
        stats: {
          kick: 99,
          weapon: 20,
          fist: 13,
        },
        story:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida nisl at posuere pellentesque. Sed scelerisque dapibus diam nec fringilla. Suspendisse nec erat ut libero volutpat consequat. Sed pellentesque ornare dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec dictum elit. Integer vulputate dui ut molestie molestie. Vivamus semper dui non mattis blandit. Nam volutpat efficitur mi sit amet rhoncus. Donec pretium tincidunt felis sed ullamcorper. Integer sed purus semper, rhoncus ligula id, imperdiet odio.',
      },
      {
        id: 7,
        name: 'Green',
        image: 'green_fighter.svg',
        stats: {
          kick: 77,
          weapon: 88,
          fist: 99,
        },
        story:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida nisl at posuere pellentesque. Sed scelerisque dapibus diam nec fringilla. Suspendisse nec erat ut libero volutpat consequat. Sed pellentesque ornare dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec dictum elit. Integer vulputate dui ut molestie molestie. Vivamus semper dui non mattis blandit. Nam volutpat efficitur mi sit amet rhoncus. Donec pretium tincidunt felis sed ullamcorper. Integer sed purus semper, rhoncus ligula id, imperdiet odio.',
      },
      {
        id: 8,
        name: 'Red',
        image: 'red_fighter.svg',
        stats: {
          kick: 12,
          weapon: 12,
          fist: 80,
        },
        story:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida nisl at posuere pellentesque. Sed scelerisque dapibus diam nec fringilla. Suspendisse nec erat ut libero volutpat consequat. Sed pellentesque ornare dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec dictum elit. Integer vulputate dui ut molestie molestie. Vivamus semper dui non mattis blandit. Nam volutpat efficitur mi sit amet rhoncus. Donec pretium tincidunt felis sed ullamcorper. Integer sed purus semper, rhoncus ligula id, imperdiet odio.',
      },
    ];

    return { fighters };
  }

  genId(fighters: Fighter[]): number {
    return Math.max(...fighters.map((fighter) => fighter.id)) + 1;
  }
}
