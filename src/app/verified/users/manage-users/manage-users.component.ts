import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FilterUsersRequestDTO, UserResponseDTO } from 'src/app/core/dto';
import { UserService } from 'src/app/core/services/user.service';
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
  private readonly pageSize: number = 12;

  constructor(private readonly userService: UserService) {}

  ngAfterViewInit(): void {
    this.filterUsers({
      pageNumber: 0,
      pageSize: this.pageSize,
    });
  }

  protected goToNextPage = () => {
    this.filterUsers({
      pageNumber: this.paginator.currentPage + 1,
      pageSize: this.pageSize,
    });
  };

  protected goToPreviousPage = () => {
    this.filterUsers({
      pageNumber: this.paginator.currentPage - 1,
      pageSize: this.pageSize,
    });
  };

  private filterUsers = (params: FilterUsersRequestDTO) => {
    this.userService.filterUsers(params, this.onFilterUsersSuccess, () => {});
  };

  private onFilterUsersSuccess = (data: any) => {
    this.paginator.totalPages = data.totalPages;
    this.paginator.currentPage = data.number;

    this.users = data.content.map((user: UserResponseDTO) =>
      this.userService.formatUserDateTimeProps(user)
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
    let pageNumber = this.paginator.currentPage;
    if (this.users.length === 1 && this.paginator.isLastPage()) {
      pageNumber--;
    }

    this.filterUsers({
      pageNumber: pageNumber,
      pageSize: this.pageSize,
    });
  };

  private onDeleteUserFailure = (err: any) => {
    alert(err.error.message);
  };
}
