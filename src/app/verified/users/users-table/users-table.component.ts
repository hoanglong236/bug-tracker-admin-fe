import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserResponseDTO } from 'src/app/core/dto';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  @Input() users: UserResponseDTO[] = [];
  @Output() enableUserEvent = new EventEmitter<number>();
  @Output() disableUserEvent = new EventEmitter<number>();
  @Output() deleteUserEvent = new EventEmitter<number>();

  protected disableUser = (userId: number) => {
    if (confirm('Are you sure you want to disable this user?')) {
      this.disableUserEvent.emit(userId);
    }
  };

  protected enableUser = (userId: number) => {
    if (confirm('Are you sure you want to enable this user?')) {
      this.enableUserEvent.emit(userId);
    }
  };

  protected deleteUser = (userId: number) => {
    if (confirm('Are you sure you want to delete this user?')) {
      this.deleteUserEvent.emit(userId);
    }
  };
}
