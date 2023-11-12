import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserResponseDTO } from 'src/app/core/dto';
import { UserService } from 'src/app/core/services/user.service';
import { DateTimeUtilService } from 'src/app/core/services/utils/date-time-util.service';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  @Input() users: UserResponseDTO[] = [];

  @Output() deleteUserEvent = new EventEmitter<number>();

  constructor(
    private readonly userService: UserService,
    private readonly dateTimeUtil: DateTimeUtilService
  ) {}

  protected disableUser = (userId: number) => {
    if (confirm('Are you sure you want to disable this user?')) {
      this.userService.disableUser(
        userId,
        this.onUpdateUserSuccess,
        this.onUpdateUserError
      );
    }
  };

  protected enableUser = (userId: number) => {
    if (confirm('Are you sure you want to enable this user?')) {
      this.userService.enableUser(
        userId,
        this.onUpdateUserSuccess,
        this.onUpdateUserError
      );
    }
  };

  private onUpdateUserSuccess = (value: UserResponseDTO) => {
    this.users = this.users.map((user) =>
      user.id === value.id ? this.dateTimeUtil.formatDateTimeProps(value) : user
    );
  };

  private onUpdateUserError = (err: any) => {
    alert(err.error.message);
  };

  protected deleteUser = (userId: number) => {
    if (confirm('Are you sure you want to delete this user?')) {
      this.deleteUserEvent.emit(userId);
    }
  };
}
