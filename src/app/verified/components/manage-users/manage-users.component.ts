import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UserFilterRequestDTO, UserResponseDTO } from 'src/app/core/dto';
import { ManageUsersService } from 'src/app/core/services/manage-users.service';
import { DateTimeUtilService } from 'src/app/core/services/utils/date-time-util.service';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
})
export class ManageUsersComponent implements AfterViewInit {
  @ViewChild('paginator') protected paginator?: PaginatorComponent;

  protected users: UserResponseDTO[] = [];
  protected totalUsers: number = 0;
  private readonly pageSize: number = 12;

  constructor(
    private readonly manageUsersService: ManageUsersService,
    private readonly dateTimeUtil: DateTimeUtilService
  ) {}

  ngAfterViewInit(): void {
    this.filterUsers({
      pageNumber: 0,
      pageSize: this.pageSize,
    });
  }

  protected goToNextPage = () => {
    this.filterUsers({
      pageNumber: this.paginator!.currentPage + 1,
      pageSize: this.pageSize,
    });
  };

  protected goToPreviousPage = () => {
    this.filterUsers({
      pageNumber: this.paginator!.currentPage - 1,
      pageSize: this.pageSize,
    });
  };

  private filterUsers = (params: UserFilterRequestDTO) => {
    this.manageUsersService.filterUsers(params, this.onFilterUsersSuccess);
  };

  private onFilterUsersSuccess = (data: any) => {
    if (this.paginator) {
      this.paginator.totalPages = data.totalPages;
      this.paginator.currentPage = data.number;
      this.paginator.pageSize = data.size;
    }

    this.users = data.content.map((user: UserResponseDTO) =>
      this.formatUserDateTimeProps(user)
    );

    this.totalUsers = data.totalElements;
  };

  private formatUserDateTimeProps = (user: UserResponseDTO) => {
    return {
      ...user,
      createdAt: this.dateTimeUtil.formatDateString(user.createdAt),
      updatedAt: this.dateTimeUtil.formatDateString(user.updatedAt),
    };
  };

  protected onDisableBtnClick = (userId: number) => {
    if (confirm('Are you sure you want to disable this user?')) {
      this.manageUsersService.disableUser(userId, this.onUpdateUserSuccess);
    }
  };

  protected onEnableBtnClick = (userId: number) => {
    if (confirm('Are you sure you want to enable this user?')) {
      this.manageUsersService.enableUser(userId, this.onUpdateUserSuccess);
    }
  };

  private onUpdateUserSuccess = (updatedUser: UserResponseDTO) => {
    this.users = this.users.map((user) =>
      user.id === updatedUser.id
        ? this.formatUserDateTimeProps(updatedUser)
        : user
    );
  };

  protected onDeleteBtnClick = (userId: number) => {
    if (confirm('Are you sure you want to delete this user?')) {
      this.manageUsersService.deleteUser(userId, this.onDeleteUserSuccess);
    }
  };

  private onDeleteUserSuccess = () => {
    let pageNumber = this.paginator!.currentPage;
    if (this.users.length === 1 && this.paginator!.isLastPage()) {
      pageNumber--;
    }

    this.filterUsers({
      pageNumber: pageNumber,
      pageSize: this.pageSize,
    });
  };
}
