import { NgModule } from '@angular/core';

import { GuestRoutingModule } from './guest-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [GuestRoutingModule, SharedModule],
})
export class GuestModule {}
