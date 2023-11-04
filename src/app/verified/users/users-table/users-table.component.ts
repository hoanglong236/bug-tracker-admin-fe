import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserResponseDTO } from 'src/app/core/dto';
import { ManageUsersService } from 'src/app/core/services/manage-users.service';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  @Input() users: UserResponseDTO[] = [];

  @Output() deleteUserEvent = new EventEmitter<number>();

  constructor(private readonly manageUsersService: ManageUsersService) {}

  protected disableUser = (userId: number) => {
    if (confirm('Are you sure you want to disable this user?')) {
      this.manageUsersService.disableUser(userId, this.onUpdateUserSuccess);
    }
  };

  protected enableUser = (userId: number) => {
    if (confirm('Are you sure you want to enable this user?')) {
      this.manageUsersService.enableUser(userId, this.onUpdateUserSuccess);
    }
  };

  private onUpdateUserSuccess = (updatedUser: UserResponseDTO) => {
    this.users = this.users.map((user) =>
      user.id === updatedUser.id
        ? this.manageUsersService.formatUserDateTimeProps(updatedUser)
        : user
    );
  };

  protected deleteUser = (userId: number) => {
    if (confirm('Are you sure you want to delete this user?')) {
      this.deleteUserEvent.emit(userId);
    }
  };
}
