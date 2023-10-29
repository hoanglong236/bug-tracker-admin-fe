import { NgModule } from '@angular/core';

import { VerifiedRoutingModule } from './verified-routing.module';
import { SharedModule } from '../shared/shared.module';
import { VerifiedLayoutComponent } from './layout/verified-layout/verified-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [VerifiedLayoutComponent, SidebarComponent, HeaderComponent],
  imports: [VerifiedRoutingModule, SharedModule],
})
export class VerifiedModule {}
