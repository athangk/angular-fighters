import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FighterDetailRoutingModule } from './fighter-detail-routing.module';
import { FighterDetailComponent } from './fighter-detail.component';

import { SharedDisplayModule } from '../../shared/modules/mat-display-shared.module';
import { FighterContentModule } from 'src/app/shared/components/fighter-content/fighter-content.module';

@NgModule({
  declarations: [FighterDetailComponent],
  imports: [
    CommonModule,
    FighterDetailRoutingModule,
    SharedDisplayModule,
    FighterContentModule,
  ],
})
export class FighterDetailModule {}
