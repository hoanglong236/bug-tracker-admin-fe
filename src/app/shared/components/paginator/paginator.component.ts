import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageModel } from 'src/app/core/models';

@Component({
  selector: 'paginator-component',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() pageModel = new PageModel();
  @Output() changePageNumberEvent = new EventEmitter<number>();

  protected isDisablePreviousBtn = () => {
    return this.pageModel.isOutOfRange() || this.pageModel.isFirstPage();
  };

  protected onPreviousBtnClick = () => {
    if (!this.isDisablePreviousBtn()) {
      this.changePageNumberEvent.emit(this.pageModel.previousPageNumber());
    }
  };

  protected isDisableNextBtn = () => {
    return this.pageModel.isOutOfRange() || this.pageModel.isLastPage();
  };

  protected onNextBtnClick = () => {
    if (!this.isDisableNextBtn()) {
      this.changePageNumberEvent.emit(this.pageModel.nextPageNumber());
    }
  };
}
