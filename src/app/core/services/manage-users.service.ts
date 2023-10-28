import { Injectable } from '@angular/core';
import { SimpleHttpService } from './common/simple-http.service';
import {
  DELETE_USER_URL,
  DISABLE_USER_URL,
  ENABLE_USER_URL,
  FILTER_USERS_URL,
} from '../api-urls';
import { UserFilterRequestDTO } from '../dto';

@Injectable({
  providedIn: 'root',
})
export class ManageUsersService {
  constructor(private readonly simpleHttp: SimpleHttpService) {}

  filterUsers = (
    params: UserFilterRequestDTO,
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
}
