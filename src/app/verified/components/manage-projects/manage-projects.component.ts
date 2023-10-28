import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FilterProjectsRequestDTO, ProjectResponseDTO } from 'src/app/core/dto';
import { ManageProjectsService } from 'src/app/core/services/manage-projects.service';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';

@Component({
  selector: 'manage-projects-component',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.scss'],
})
export class ManageProjectsComponent implements AfterViewInit {
  @ViewChild('paginator')
  private readonly paginator!: PaginatorComponent;

  protected projects: ProjectResponseDTO[] = [];
  protected totalProjects: number = 0;
  private readonly pageSize: number = 8;

  constructor(private readonly manageProjectsService: ManageProjectsService) {}

  ngAfterViewInit(): void {
    this.filterProjects({
      pageNumber: 0,
      pageSize: this.pageSize,
    });
  }

  protected goToNextPage = () => {
    this.filterProjects({
      pageNumber: this.paginator.currentPage + 1,
      pageSize: this.pageSize,
    });
  };

  protected goToPreviousPage = () => {
    this.filterProjects({
      pageNumber: this.paginator.currentPage - 1,
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
    this.paginator.totalPages = data.totalPages;
    this.paginator.currentPage = data.number;

    this.projects = data.content.map((project: ProjectResponseDTO) =>
      this.manageProjectsService.formatProjectDateTimeProps(project)
    );

    this.totalProjects = data.totalElements;
  };
}
