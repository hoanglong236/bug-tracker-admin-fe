import { Injectable } from '@angular/core';

import { SimpleHttpService } from './common/simple-http.service';
import {
  ADD_MEMBER_URL,
  CREATE_PROJECT_URL,
  DELETE_PROJECT_URL,
  FILTER_PROJECTS_URL,
  GET_PROJECT_DETAILS_URL,
  GET_PROJECT_URL,
  UPDATE_PROJECT_URL,
} from '../api-urls';
import { FilterProjectsRequestDTO, ProjectRequestDTO } from '../dto';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private readonly simpleHttp: SimpleHttpService) {}

  filterProjects = (
    params: FilterProjectsRequestDTO,
    onSuccess: Function,
    onError: Function
  ) => {
    this.simpleHttp.post(FILTER_PROJECTS_URL, params).subscribe({
      next: (value) => onSuccess(value),
      error: (err) => onError(err),
    });
  };

  getProject = (projectId: number, onSuccess: Function, onError: Function) => {
    this.simpleHttp
      .get(GET_PROJECT_URL.replace(':id', `${projectId}`))
      .subscribe({
        next: (value) => onSuccess(value),
        error: (err) => onError(err),
      });
  };

  createProject = (
    params: ProjectRequestDTO,
    onSuccess: Function,
    onError: Function
  ) => {
    this.simpleHttp.post(CREATE_PROJECT_URL, params).subscribe({
      next: (value) => onSuccess(value),
      error: (err) => onError(err),
    });
  };

  updateProject = (
    projectId: number,
    params: ProjectRequestDTO,
    onSuccess: Function,
    onError: Function
  ) => {
    this.simpleHttp
      .put(UPDATE_PROJECT_URL.replace(':id', `${projectId}`), params)
      .subscribe({
        next: (value) => onSuccess(value),
        error: (err) => onError(err),
      });
  };

  deleteProject = (
    projectId: number,
    onSuccess: Function,
    onError: Function
  ) => {
    this.simpleHttp
      .delete(DELETE_PROJECT_URL.replace(':id', `${projectId}`))
      .subscribe({
        next: (value) => onSuccess(value),
        error: (err) => onError(err),
      });
  };

  getProjectDetails = (
    projectId: number,
    onSuccess: Function,
    onError: Function
  ) => {
    this.simpleHttp
      .get(GET_PROJECT_DETAILS_URL.replace(':id', `${projectId}`))
      .subscribe({
        next: (value) => onSuccess(value),
        error: (err) => onError(err),
      });
  };

  addMember = (
    projectId: number,
    memberEmail: string,
    onSuccess: Function,
    onError: Function
  ) => {
    const url = ADD_MEMBER_URL.replace(':id', `${projectId}`).replace(
      ':email',
      memberEmail
    );
    this.simpleHttp.post(url, {}).subscribe({
      next: (value) => onSuccess(value),
      error: (err) => onError(err),
    });
  };
}
