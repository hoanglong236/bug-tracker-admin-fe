import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserResponseDTO } from 'src/app/core/dto';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  @Input() users: UserResponseDTO[] = [];

  @Output() deleteUserEvent = new EventEmitter<number>();

  constructor(private readonly userService: UserService) {}

  protected disableUser = (userId: number) => {
    if (confirm('Are you sure you want to disable this user?')) {
      this.userService.disableUser(
        userId,
        this.onUpdateUserSuccess,
        this.onUpdateUserFailure
      );
    }
  };

  protected enableUser = (userId: number) => {
    if (confirm('Are you sure you want to enable this user?')) {
      this.userService.enableUser(
        userId,
        this.onUpdateUserSuccess,
        this.onUpdateUserFailure
      );
    }
  };

  private onUpdateUserSuccess = (updatedUser: UserResponseDTO) => {
    this.users = this.users.map((user) =>
      user.id === updatedUser.id
        ? this.userService.formatUserDateTimeProps(updatedUser)
        : user
    );
  };

  private onUpdateUserFailure = (err: any) => {
    alert(err.error.message);
  };

  protected deleteUser = (userId: number) => {
    if (confirm('Are you sure you want to delete this user?')) {
      this.deleteUserEvent.emit(userId);
    }
  };
}
