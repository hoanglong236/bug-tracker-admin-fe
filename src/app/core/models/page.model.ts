export class PageModel {
  pageNumber: number;
  totalPages: number;
  pageSize: number;

  constructor(
    pageNumber: number = 0,
    totalPages: number = 0,
    pageSize: number = 0
  ) {
    this.pageNumber = pageNumber;
    this.totalPages = totalPages;
    this.pageSize = pageSize;
  }

  isLastPage = () => {
    return this.pageNumber === this.totalPages - 1 || this.totalPages === 0;
  };

  isFirstPage = () => {
    return this.pageNumber === 0;
  };

  getNextPage = () => {
    return new PageModel(this.pageNumber + 1, this.totalPages, this.pageSize);
  };

  getPreviousPage = () => {
    return new PageModel(this.pageNumber - 1, this.totalPages, this.pageSize);
  };
}
