import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifiedRoutingModule } from './verified-routing.module';
import { VerifiedLayoutComponent } from './layout/verified-layout/verified-layout.component';

@NgModule({
  declarations: [VerifiedLayoutComponent],
  imports: [CommonModule, VerifiedRoutingModule],
})
export class VerifiedModule {}
