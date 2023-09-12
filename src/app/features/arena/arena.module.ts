import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArenaRoutingModule } from './arena-routing.module';
import { SharedDisplayModule } from '../../shared/modules/mat-display-shared.module';
import { ArenaComponent } from './arena.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FighterContentModule } from 'src/app/shared/components/fighter-content/fighter-content.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ArenaComponent],
  imports: [
    CommonModule,
    ArenaRoutingModule,
    SharedDisplayModule,
    DragDropModule,
    FighterContentModule,
    MatDialogModule,
  ],
  exports: [ArenaComponent],
})
export class ArenaModule {}
