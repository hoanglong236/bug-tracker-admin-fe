import { Injectable } from '@angular/core';
import { SimpleHttpService } from './common/simple-http.service';
import { FILTER_USERS_URL } from '../api-urls';
import { FilterUsersRequestDTO } from '../dto';

@Injectable({
  providedIn: 'root',
})
export class ManageUsersService {
  constructor(private simpleHttp: SimpleHttpService) {}

  filterUsers = (
    params: FilterUsersRequestDTO,
    onResolve: Function,
    onReject: Function
  ) => {
    this.simpleHttp.post(FILTER_USERS_URL, params).subscribe({
      next: (value) => onResolve(value),
      error: (err) => onReject(err),
    });
  };
}
