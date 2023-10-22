import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'guest',
    loadChildren: () =>
      import('./guest/guest.module').then((m) => m.GuestModule),
  },
  {
    path: 'verified',
    loadChildren: () =>
      import('./verified/verified.module').then((m) => m.VerifiedModule),
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
