import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Fighter } from 'src/app/interfaces/fighters.interfaces';
import { Store } from '@ngrx/store';
import {
  selectFighterById,
  selectStateFighters,
} from 'src/app/store/selectors/fighters.selectors';
import { FightersService } from '../../services/fighter.service';

@Component({
  selector: 'app-fighter-detail',
  templateUrl: './fighter-detail.component.html',
  styleUrls: ['./fighter-detail.component.scss'],
})
export class FighterDetailComponent {
  fighter: Fighter;
  fighters$ = this.store.select(selectStateFighters);
  isFigthersEmpty: boolean;

  constructor(
    private route: ActivatedRoute,
    private fightersService: FightersService,
    private location: Location,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.fighters$.subscribe((fighters) => {
      this.isFigthersEmpty = fighters.length > 0;
    });

    const routeId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.isFigthersEmpty) {
      this.getFighter(routeId);
    } else {
      this.store
        .select(selectFighterById(routeId))
        .subscribe((fighter) => (this.fighter = fighter as Fighter));
    }
  }

  getFighter(routeId: number): void {
    this.fightersService
      .getFighter(routeId)
      .subscribe((fighter: Fighter) => (this.fighter = fighter));
  }

  goBack(): void {
    this.location.back();
  }
}
