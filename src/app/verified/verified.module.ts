import { NgModule } from '@angular/core';

import { VerifiedRoutingModule } from './verified-routing.module';
import { SharedModule } from '../shared/shared.module';
import { VerifiedLayoutComponent } from './layout/verified-layout/verified-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { UsersTableComponent } from './components/manage-users/users-table/users-table.component';
import { ManageProjectsComponent } from './components/manage-projects/manage-projects.component';

@NgModule({
  declarations: [
    VerifiedLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    ManageUsersComponent,
    UsersTableComponent,
    ManageProjectsComponent,
  ],
  imports: [VerifiedRoutingModule, SharedModule],
})
export class VerifiedModule {}
