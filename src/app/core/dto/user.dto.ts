export type FilterUsersRequestDTO = {
  nameOrEmailPattern: string | null;
  status: boolean | null;
  sortField: string;
  sortDescending: boolean;
  pageNumber: number;
  pageSize: number;
};

export type UserResponseDTO = {
  id: number;
  email: string;
  name: string;
  role: string;
  enableFlag: boolean;
  createdAt: string;
  updatedAt: string;
};
