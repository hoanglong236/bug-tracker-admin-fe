export type FilterProjectsRequestDTO = {
  pageNumber: number;
  pageSize: number;
};

export type ProjectRequestDTO = {
  name: string;
  kind: string;
  architecture: string;
  technology: string;
  lang: string;
  db: string;
  closeFlag: boolean;
  note: string;
};

export type ProjectResponseDTO = {
  id: number;
  name: string;
  kind: string;
  architecture: string;
  technology: string;
  lang: string;
  db: string;
  note: string;
  closeFlag: boolean;
  createdAt: string;
  updatedAt: string;
};

export type MemberResponseDTO = {
  id: number;
  projectId: number;
  userId: number;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};
