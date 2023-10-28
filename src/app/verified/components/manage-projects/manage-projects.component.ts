import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FilterProjectsRequestDTO, ProjectResponseDTO } from 'src/app/core/dto';
import { ManageProjectsService } from 'src/app/core/services/manage-projects.service';
import { DateTimeUtilService } from 'src/app/core/services/utils/date-time-util.service';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';

@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.scss'],
})
export class ManageProjectsComponent implements AfterViewInit {
  @ViewChild('paginator') protected paginator?: PaginatorComponent;

  protected projects: ProjectResponseDTO[] = [];
  protected totalProjects: number = 0;
  private readonly pageSize: number = 12;

  constructor(
    private readonly manageProjectsService: ManageProjectsService,
    private readonly dateTimeUtil: DateTimeUtilService
  ) {}

  ngAfterViewInit(): void {
    this.filterProjects({
      pageNumber: 0,
      pageSize: this.pageSize,
    });
  }

  protected goToNextPage = () => {
    this.filterProjects({
      pageNumber: this.paginator!.currentPage + 1,
      pageSize: this.pageSize,
    });
  };

  protected goToPreviousPage = () => {
    this.filterProjects({
      pageNumber: this.paginator!.currentPage - 1,
      pageSize: this.pageSize,
    });
  };

  private filterProjects = (params: FilterProjectsRequestDTO) => {
    this.manageProjectsService.filterProjects(
      params,
      this.onFilterProjectsSuccess
    );
  };

  private onFilterProjectsSuccess = (data: any) => {
    if (this.paginator) {
      this.paginator.totalPages = data.totalPages;
      this.paginator.currentPage = data.number;
      this.paginator.pageSize = data.size;
    }

    this.projects = data.content.map((project: ProjectResponseDTO) =>
      this.formatProjectDateTimeProps(project)
    );

    this.totalProjects = data.totalElements;
  };

  private formatProjectDateTimeProps = (project: ProjectResponseDTO) => {
    return {
      ...project,
      createdAt: this.dateTimeUtil.formatDateString(project.createdAt),
      updatedAt: this.dateTimeUtil.formatDateString(project.updatedAt),
    };
  };

  protected onOpenBtnClick = (projectId: number) => {};

  protected onCloseBtnClick = (projectId: number) => {};

  protected onDeleteBtnClick = (projectId: number) => {};
}
