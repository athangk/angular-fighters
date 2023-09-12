import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FighterContentComponent } from './fighter-content.component';
import { SharedDisplayModule } from '../../modules/mat-display-shared.module';

@NgModule({
  declarations: [FighterContentComponent],
  imports: [CommonModule, SharedDisplayModule, DragDropModule],
  exports: [FighterContentComponent],
})
export class FighterContentModule {}
