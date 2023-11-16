import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FilterProjectsRequestDTO, ProjectResponseDTO } from 'src/app/core/dto';
import { PageModel } from 'src/app/core/models';
import { ProjectService } from 'src/app/core/services/project.service';
import { DateTimeUtilService } from 'src/app/core/services/utils/date-time-util.service';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';

@Component({
  selector: 'manage-projects-component',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.scss'],
})
export class ManageProjectsComponent implements AfterViewInit {
  @ViewChild(PaginatorComponent) private paginator!: PaginatorComponent;

  protected projects: ProjectResponseDTO[] = [];
  protected totalProjects: number = 0;

  constructor(
    private readonly projectService: ProjectService,
    private readonly dateTimeUtil: DateTimeUtilService
  ) {}

  ngAfterViewInit(): void {
    this.filterProjects({ pageNumber: 0, pageSize: 8 });
  }

  protected goToXPage = (pageModel: PageModel) => {
    this.filterProjects({
      pageNumber: pageModel.pageNumber,
      pageSize: pageModel.pageSize,
    });
  };

  private filterProjects = (params: FilterProjectsRequestDTO) => {
    this.projectService.filterProjects(
      params,
      this.onFilterProjectsSuccess,
      () => {}
    );
  };

  private onFilterProjectsSuccess = (value: any) => {
    this.paginator.pageModel = new PageModel(
      value.number,
      value.totalPages,
      value.size
    );

    this.projects = value.content.map((project: ProjectResponseDTO) =>
      this.dateTimeUtil.formatDateTimeProps(project)
    );

    this.totalProjects = value.totalElements;
  };

  protected deleteProject = (projectId: number) => {
    this.projectService.deleteProject(
      projectId,
      this.onDeleteProjectSuccess,
      this.onDeleteProjectError
    );
  };

  private onDeleteProjectSuccess = () => {
    let pageModel = { ...this.paginator.pageModel };
    if (
      !pageModel.isFirstPage() &&
      pageModel.isLastPage() &&
      this.projects.length === 1
    ) {
      pageModel = pageModel.getPreviousPage();
    }

    this.filterProjects({
      pageNumber: pageModel.pageNumber,
      pageSize: pageModel.pageSize,
    });
  };

  private onDeleteProjectError = (err: any) => {
    alert(err.error.message);
  };
}
