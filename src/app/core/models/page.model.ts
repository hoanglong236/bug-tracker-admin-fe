export class PageModel {
  static readonly FIRST_PAGE = 0;

  readonly pageNumber: number;
  readonly totalPages: number;
  readonly pageSize: number;

  constructor(
    pageNumber: number = PageModel.FIRST_PAGE,
    totalPages: number = 0,
    pageSize: number = 0
  ) {
    this.pageNumber = pageNumber;
    this.totalPages = totalPages;
    this.pageSize = pageSize;
  }

  lastPageNumber = () => {
    return this.totalPages - 1;
  };

  previousPageNumber = () => {
    return this.pageNumber - 1;
  };

  nextPageNumber = () => {
    return this.pageNumber + 1;
  };

  isOutOfRange = () => {
    return (
      this.pageNumber < PageModel.FIRST_PAGE ||
      this.pageNumber > this.lastPageNumber()
    );
  };

  isLastPage = () => {
    return this.totalPages === 0 || this.pageNumber === this.lastPageNumber();
  };

  isFirstPage = () => {
    return this.totalPages === 0 || this.pageNumber === PageModel.FIRST_PAGE;
  };
}
