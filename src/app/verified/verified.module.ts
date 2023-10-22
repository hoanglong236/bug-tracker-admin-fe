import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifiedRoutingModule } from './verified-routing.module';
import { VerifiedLayoutComponent } from './layout/verified-layout/verified-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    VerifiedLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, VerifiedRoutingModule],
})
export class VerifiedModule {}
