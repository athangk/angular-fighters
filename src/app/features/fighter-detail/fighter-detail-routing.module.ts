import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FighterDetailComponent } from './fighter-detail.component';

const routes: Routes = [{ path: '', component: FighterDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FighterDetailRoutingModule {}
