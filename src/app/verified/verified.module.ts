import { NgModule } from '@angular/core';

import { VerifiedRoutingModule } from './verified-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderNavComponent } from './layouts/header-nav/header-nav.component';
import { SidenavContentComponent } from './layouts/sidenav-content/sidenav-content.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderNavComponent,
    SidenavContentComponent,
  ],
  imports: [VerifiedRoutingModule, SharedModule],
})
export class VerifiedModule {}
