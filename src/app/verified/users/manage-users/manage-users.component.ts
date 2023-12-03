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

  private readonly defaultFilterRequestDTO: FilterUsersRequestDTO = {
    nameOrEmailPattern: null,
    status: null,
    sortField: 'id',
    sortDescending: true,
    pageNumber: PageModel.FIRST_PAGE,
    pageSize: 2,
  };
  private filterRequestDTO: FilterUsersRequestDTO = {
    ...this.defaultFilterRequestDTO,
  };

  constructor(
    private readonly userService: UserService,
    private readonly dateTimeUtil: DateTimeUtilService
  ) {}

  ngAfterViewInit(): void {
    this.filterUsers();
  }

  protected onFilterUsersFormSubmit = (data: any) => {
    this.filterRequestDTO.pageNumber = PageModel.FIRST_PAGE;
    if (data) {
      const props = {
        nameOrEmailPattern: data.nameOrEmailPattern,
        status: data.status,
        sortField: data.sortField,
        sortDescending: data.sortDescending,
      };
      this.filterRequestDTO = { ...this.filterRequestDTO, ...props };
    }
    this.filterUsers();
  };

  private filterUsers = () => {
    this.userService.filterUsers(
      this.filterRequestDTO,
      this.onFilterUsersSuccess,
      (err: any) => alert(err.error.message)
    );
  };

  private onFilterUsersSuccess = (value: any) => {
    const pageModel = new PageModel(value.number, value.totalPages, value.size);
    this.paginator.pageModel = pageModel;
    this.users = value.content.map((user: UserResponseDTO) =>
      this.dateTimeUtil.formatDateTimeProps(user)
    );
    this.totalUsers = value.totalElements;
  };

  protected enableUser = (userId: number) => {
    this.userService.enableUser(userId, this.onUpdateUserSuccess, (err: any) =>
      alert(err.error.message)
    );
  };

  protected disableUser = (userId: number) => {
    this.userService.disableUser(userId, this.onUpdateUserSuccess, (err: any) =>
      alert(err.error.message)
    );
  };

  private onUpdateUserSuccess = () => {
    this.goToXPage(PageModel.FIRST_PAGE);
  };

  protected deleteUser = (userId: number) => {
    this.userService.deleteUser(userId, this.onDeleteUserSuccess, (err: any) =>
      alert(err.error.message)
    );
  };

  private onDeleteUserSuccess = () => {
    const pageModel = this.paginator.pageModel;
    const numberUsersAfterDeleteSuccess = this.users.length - 1;
    if (pageModel.isFirstPage()) {
      this.filterUsers();
    } else if (pageModel.isLastPage() || numberUsersAfterDeleteSuccess === 0) {
      this.goToXPage(pageModel.previousPageNumber());
    }
  };

  protected goToXPage = (pageNumber: number) => {
    this.filterRequestDTO.pageNumber = pageNumber;
    this.filterUsers();
  };
}
