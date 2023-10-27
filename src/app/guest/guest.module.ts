import { NgModule } from '@angular/core';

import { GuestRoutingModule } from './guest-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [GuestRoutingModule, SharedModule],
})
export class GuestModule {}
