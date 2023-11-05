import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UsersFilterFormComponent } from './users-filter-form/users-filter-form.component';
import { UsersTableComponent } from './users-table/users-table.component';

@NgModule({
  declarations: [
    ManageUsersComponent,
    UsersFilterFormComponent,
    UsersTableComponent,
  ],
  imports: [UsersRoutingModule, SharedModule],
})
export class UsersModule {}
