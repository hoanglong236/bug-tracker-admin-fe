import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageModel } from 'src/app/core/models';

@Component({
  selector: 'paginator-component',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() pageModel = new PageModel();
  @Output() goToXPageEvent = new EventEmitter<PageModel>();

  protected onPreviousBtnClick = () => {
    if (!this.pageModel.isFirstPage()) {
      this.goToXPageEvent.emit(this.pageModel.getPreviousPage());
    }
  };

  protected onNextBtnClick = () => {
    if (!this.pageModel.isLastPage()) {
      this.goToXPageEvent.emit(this.pageModel.getNextPage());
    }
  };
}
