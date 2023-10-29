import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifiedLayoutComponent } from './layout/verified-layout/verified-layout.component';

const routes: Routes = [
  {
    path: '',
    component: VerifiedLayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./projects/projects.module').then((m) => m.ProjectsModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifiedRoutingModule {}
