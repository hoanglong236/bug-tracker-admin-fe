import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UserResponseDTO } from 'src/app/core/dto';
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
    private manageUsersService: ManageUsersService,
    private dateTimeUtil: DateTimeUtilService
  ) {}

  ngAfterViewInit(): void {
    this.manageUsersService.filterUsers(
      {
        pageNumber: 0,
        pageSize: this.pageSize,
      },
      this.onFilterUsersSuccess,
      this.onFilterUsersFailure
    );
  }

  private onFilterUsersSuccess = (data: any) => {
    if (this.paginator) {
      this.paginator.totalPages = data.totalPages;
      this.paginator.currentPage = data.number;
      this.paginator.pageSize = data.size;
    }

    this.users = data.content.map((user: any) => {
      return {
        ...user,
        createdAt: this.dateTimeUtil.formatDateString(user.createdAt),
      };
    });

    this.totalUsers = data.totalElements;
  };

  private onFilterUsersFailure = (err: any) => {
    console.log(err);
  };

  protected goToNextPage = () => {
    this.manageUsersService.filterUsers(
      {
        pageNumber: this.paginator!.currentPage + 1,
        pageSize: this.pageSize,
      },
      this.onFilterUsersSuccess,
      this.onFilterUsersFailure
    );
  };

  protected goToPreviousPage = () => {
    this.manageUsersService.filterUsers(
      {
        pageNumber: this.paginator!.currentPage - 1,
        pageSize: this.pageSize,
      },
      this.onFilterUsersSuccess,
      this.onFilterUsersFailure
    );
  };
}
