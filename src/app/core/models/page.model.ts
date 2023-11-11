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
    return this.pageNumber === this.totalPages - 1;
  };

  isFirstPage = () => {
    return this.pageNumber === 0;
  };

  getNextPage = () => {
    return this.cloneByPageNumber(this.pageNumber + 1);
  };

  getPreviousPage = () => {
    return this.cloneByPageNumber(this.pageNumber - 1);
  };

  private cloneByPageNumber = (pageNumber: number) => {
    return new PageModel(pageNumber, this.totalPages, this.pageSize);
  };
}
