import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/fighter-list', pathMatch: 'full' },
  {
    path: 'fighter-list',
    loadChildren: () =>
      import('./features/fighter-list/fighter-list.module').then(
        (m) => m.FighterListModule
      ),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./features/fighter-detail/fighter-detail.module').then(
        (m) => m.FighterDetailModule
      ),
  },
  {
    path: 'arena',
    loadChildren: () =>
      import('./features/arena/arena.module').then((m) => m.ArenaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
