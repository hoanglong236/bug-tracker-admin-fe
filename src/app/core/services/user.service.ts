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
export class UserService {
  constructor(
    private readonly simpleHttp: SimpleHttpService,
    private readonly dateTimeUtil: DateTimeUtilService
  ) {}

  filterUsers = (
    params: FilterUsersRequestDTO,
    onSuccess: Function,
    onError: Function
  ) => {
    this.simpleHttp.post(FILTER_USERS_URL, params).subscribe({
      next: (value) => onSuccess(value),
      error: (err) => onError(err),
    });
  };

  disableUser = (userId: number, onSuccess: Function, onError: Function) => {
    this.simpleHttp
      .post(DISABLE_USER_URL.replace(':id', `${userId}`), {})
      .subscribe({
        next: (value) => onSuccess(value),
        error: (err) => onError(err),
      });
  };

  enableUser = (userId: number, onSuccess: Function, onError: Function) => {
    this.simpleHttp
      .post(ENABLE_USER_URL.replace(':id', `${userId}`), {})
      .subscribe({
        next: (value) => onSuccess(value),
        error: (err) => onError(err),
      });
  };

  deleteUser = (userId: number, onSuccess: Function, onError: Function) => {
    this.simpleHttp
      .delete(DELETE_USER_URL.replace(':id', `${userId}`))
      .subscribe({
        next: (value) => onSuccess(value),
        error: (err) => onError(err),
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
