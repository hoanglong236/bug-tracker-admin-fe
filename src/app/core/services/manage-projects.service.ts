import { Injectable } from '@angular/core';

import { SimpleHttpService } from './common/simple-http.service';
import { DateTimeUtilService } from './utils/date-time-util.service';
import {
  CREATE_PROJECT_URL,
  DELETE_PROJECT_URL,
  FILTER_PROJECTS_URL,
  GET_PROJECT_URL,
  UPDATE_PROJECT_URL,
} from '../api-urls';
import {
  FilterProjectsRequestDTO,
  ProjectRequestDTO,
  ProjectResponseDTO,
} from '../dto';

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

  createProject = (
    params: ProjectRequestDTO,
    onResolve: Function,
    onReject: Function = console.log
  ) => {
    this.simpleHttp.post(CREATE_PROJECT_URL, params).subscribe({
      next: (value) => onResolve(value),
      error: (err) => onReject(err),
    });
  };

  getProject = (
    projectId: number,
    onResolve: Function,
    onReject: Function = console.log
  ) => {
    this.simpleHttp
      .get(GET_PROJECT_URL.replace(':id', `${projectId}`))
      .subscribe({
        next: (value) => onResolve(value),
        error: (err) => onReject(err),
      });
  };

  updateProject = (
    projectId: number,
    params: ProjectRequestDTO,
    onResolve: Function,
    onReject: Function = console.log
  ) => {
    this.simpleHttp
      .put(UPDATE_PROJECT_URL.replace(':id', `${projectId}`), params)
      .subscribe({
        next: (value) => onResolve(value),
        error: (err) => onReject(err),
      });
  };

  deleteProject = (
    projectId: number,
    onResolve: Function,
    onReject: Function = console.log
  ) => {
    this.simpleHttp
      .delete(DELETE_PROJECT_URL.replace(':id', `${projectId}`))
      .subscribe({
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
