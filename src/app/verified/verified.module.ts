import { NgModule } from '@angular/core';

import { VerifiedRoutingModule } from './verified-routing.module';
import { VerifiedLayoutComponent } from './layout/verified-layout/verified-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { SharedModule } from '../shared/shared.module';
import { ManageProjectsComponent } from './components/manage-projects/manage-projects.component';

@NgModule({
  declarations: [
    VerifiedLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    ManageUsersComponent,
    ManageProjectsComponent,
  ],
  imports: [VerifiedRoutingModule, SharedModule],
})
export class VerifiedModule {}
