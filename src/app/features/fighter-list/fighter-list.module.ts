import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDisplayModule } from '../../shared/modules/mat-display-shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FighterListComponent } from './fighter-list.component';

import { FighterListRoutingModule } from './fighter-list-routing.module';
import { FighterContentModule } from 'src/app/shared/components/fighter-content/fighter-content.module';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';

@NgModule({
  declarations: [FighterListComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    SharedDisplayModule,
    DragDropModule,
    FighterContentModule,
    FighterListRoutingModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
})
export class FighterListModule {}
