import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FilterUsersRequestDTO, UserResponseDTO } from 'src/app/core/dto';
import { PageModel } from 'src/app/core/models';
import { UserService } from 'src/app/core/services/user.service';
import { DateTimeUtilService } from 'src/app/core/services/utils/date-time-util.service';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';

@Component({
  selector: 'manage-users-component',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
})
export class ManageUsersComponent implements AfterViewInit {
  @ViewChild(PaginatorComponent) private paginator!: PaginatorComponent;

  protected users: UserResponseDTO[] = [];
  protected totalUsers = 0;

  private filterRequestDTO: FilterUsersRequestDTO = {
    nameOrEmail: '',
    status: 'all',
    sortField: 'id',
    sortDescending: true,
    pageNumber: 0,
    pageSize: 12,
  };

  constructor(
    private readonly userService: UserService,
    private readonly dateTimeUtil: DateTimeUtilService
  ) {}

  ngAfterViewInit(): void {
    this.filterUsers();
  }

  protected goToXPage = (pageModel: PageModel) => {
    const pageProps = {
      pageNumber: pageModel.pageNumber,
      pageSize: pageModel.pageSize,
    };
    this.filterRequestDTO = {
      ...this.filterRequestDTO,
      ...pageProps,
    };
    this.filterUsers();
  };

  private filterUsers = () => {
    this.userService.filterUsers(
      this.filterRequestDTO,
      this.onFilterUsersSuccess,
      () => {}
    );
  };

  private onFilterUsersSuccess = (value: any) => {
    this.paginator.pageModel = new PageModel(
      value.number,
      value.totalPages,
      value.size
    );

    this.users = value.content.map((user: UserResponseDTO) =>
      this.dateTimeUtil.formatDateTimeProps(user)
    );
    this.totalUsers = value.totalElements;
  };

  protected deleteUser = (userId: number) => {
    this.userService.deleteUser(
      userId,
      this.onDeleteUserSuccess,
      this.onDeleteUserError
    );
  };

  private onDeleteUserSuccess = () => {
    let pageModel = { ...this.paginator.pageModel };
    if (
      !pageModel.isFirstPage() &&
      pageModel.isLastPage() &&
      this.users.length === 1
    ) {
      pageModel = pageModel.getPreviousPage();
    }
    this.goToXPage(pageModel);
  };

  private onDeleteUserError = (err: any) => {
    alert(err.error.message);
  };

  protected onFilterUsersFormSubmit = (data: any) => {
    let filterProps = {};
    if (data) {
      filterProps = {
        nameOrEmail: data.nameOrEmail,
        status: data.status,
        sortField: data.sortField,
        sortDescending: data.sortDescending,
      };
    }
    this.filterRequestDTO = { ...this.filterRequestDTO, ...filterProps };
    this.filterUsers();
  };
}
