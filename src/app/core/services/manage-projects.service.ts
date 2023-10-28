import { Injectable } from '@angular/core';
import { SimpleHttpService } from './common/simple-http.service';
import { FILTER_PROJECTS_URL } from '../api-urls';
import { FilterProjectsRequestDTO } from '../dto';

@Injectable({
  providedIn: 'root',
})
export class ManageProjectsService {
  constructor(private readonly simpleHttp: SimpleHttpService) {}

  filterProjects = (
    params: FilterProjectsRequestDTO,
    onResolve: Function,
    onReject: Function = console.log
  ) => {
    this.simpleHttp.post(FILTER_PROJECTS_URL, params).subscribe({
      next: (value) => onResolve(value),
      error: (err) => onReject(err),
    });
  };
}
