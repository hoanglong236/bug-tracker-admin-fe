import { Injectable } from '@angular/core';

import { SimpleHttpService } from './common/simple-http.service';
import { DateTimeUtilService } from './utils/date-time-util.service';
import {
  DELETE_USER_URL,
  DISABLE_USER_URL,
  ENABLE_USER_URL,
  FILTER_USERS_URL,
} from '../api-urls';
import { FilterUsersRequestDTO, UserResponseDTO } from '../dto';

@Injectable({
  providedIn: 'root',
})
export class ManageUsersService {
  constructor(
    private readonly simpleHttp: SimpleHttpService,
    private readonly dateTimeUtil: DateTimeUtilService
  ) {}

  filterUsers = (
    params: FilterUsersRequestDTO,
    onResolve: Function,
    onReject: Function = console.log
  ) => {
    this.simpleHttp.post(FILTER_USERS_URL, params).subscribe({
      next: (value) => onResolve(value),
      error: (err) => onReject(err),
    });
  };

  disableUser = (
    userId: number,
    onResolve: Function,
    onReject: Function = console.log
  ) => {
    this.simpleHttp.post(DISABLE_USER_URL + `/${userId}`, {}).subscribe({
      next: (value) => onResolve(value),
      error: (err) => onReject(err),
    });
  };

  enableUser = (
    userId: number,
    onResolve: Function,
    onReject: Function = console.log
  ) => {
    this.simpleHttp.post(ENABLE_USER_URL + `/${userId}`, {}).subscribe({
      next: (value) => onResolve(value),
      error: (err) => onReject(err),
    });
  };

  deleteUser = (
    userId: number,
    onResolve: Function,
    onReject: Function = console.log
  ) => {
    this.simpleHttp.delete(DELETE_USER_URL + `/${userId}`).subscribe({
      next: (value) => onResolve(value),
      error: (err) => onReject(err),
    });
  };

  formatUserDateTimeProps = (user: UserResponseDTO) => {
    return {
      ...user,
      createdAt: this.dateTimeUtil.formatDateString(user.createdAt),
      updatedAt: this.dateTimeUtil.formatDateString(user.updatedAt),
    };
  };
}
