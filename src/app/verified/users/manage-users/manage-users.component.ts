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
  @ViewChild('paginator') private paginator!: PaginatorComponent;

  protected users: UserResponseDTO[] = [];
  protected totalUsers: number = 0;

  constructor(
    private readonly userService: UserService,
    private readonly dateTimeUtil: DateTimeUtilService
  ) {}

  ngAfterViewInit(): void {
    this.filterUsers({ pageNumber: 0, pageSize: 12 });
  }

  protected goToXPage = (pageModel: PageModel) => {
    this.filterUsers({
      pageNumber: pageModel.pageNumber,
      pageSize: pageModel.pageSize,
    });
  };

  private filterUsers = (params: FilterUsersRequestDTO) => {
    this.userService.filterUsers(params, this.onFilterUsersSuccess, () => {});
  };

  private onFilterUsersSuccess = (data: any) => {
    this.paginator.pageModel = new PageModel(
      data.number,
      data.totalPages,
      data.size
    );

    this.users = data.content.map((user: UserResponseDTO) =>
      this.dateTimeUtil.formatDateTimeProps(user)
    );

    this.totalUsers = data.totalElements;
  };

  protected deleteUser = (userId: number) => {
    this.userService.deleteUser(
      userId,
      this.onDeleteUserSuccess,
      this.onDeleteUserFailure
    );
  };

  private onDeleteUserSuccess = () => {
    let pageModel = { ...this.paginator.pageModel };
    if (this.users.length === 1 && pageModel.isLastPage()) {
      pageModel = pageModel.getPreviousPage();
    }

    this.filterUsers({
      pageNumber: pageModel.pageNumber,
      pageSize: pageModel.pageSize,
    });
  };

  private onDeleteUserFailure = (err: any) => {
    alert(err.error.message);
  };
}
