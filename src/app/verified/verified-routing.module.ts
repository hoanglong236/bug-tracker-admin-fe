import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifiedLayoutComponent } from './layout/verified-layout/verified-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageProjectsComponent } from './components/manage-projects/manage-projects.component';

const routes: Routes = [
  {
    path: '',
    component: VerifiedLayoutComponent,
    children: [
      { path: 'users', component: ManageUsersComponent },
      { path: 'projects', component: ManageProjectsComponent },
      { path: '', component: DashboardComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifiedRoutingModule {}
