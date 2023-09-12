import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
})
export class SharedDisplayModule {}
