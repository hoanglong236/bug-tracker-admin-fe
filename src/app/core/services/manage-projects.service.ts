import { Injectable } from '@angular/core';

import { SimpleHttpService } from './common/simple-http.service';
import { DateTimeUtilService } from './utils/date-time-util.service';
import { FILTER_PROJECTS_URL } from '../api-urls';
import { FilterProjectsRequestDTO, ProjectResponseDTO } from '../dto';

@Injectable({
  providedIn: 'root',
})
export class ManageProjectsService {
  constructor(
    private readonly simpleHttp: SimpleHttpService,
    private readonly dateTimeUtil: DateTimeUtilService
  ) {}

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

  formatProjectDateTimeProps = (project: ProjectResponseDTO) => {
    return {
      ...project,
      createdAt: this.dateTimeUtil.formatDateString(project.createdAt),
      updatedAt: this.dateTimeUtil.formatDateString(project.updatedAt),
    };
  };
}
