import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() totalPages: number = 0;
  @Input() currentPage: number = 0;

  @Output() previousBtnClickEvent = new EventEmitter();
  @Output() nextBtnClickEvent = new EventEmitter();

  protected onPreviousBtnClick = () => {
    if (!this.isFirstPage()) {
      this.previousBtnClickEvent.emit();
    }
  };

  public isFirstPage = () => {
    return this.currentPage === 0;
  };

  protected onNextBtnClick = () => {
    if (!this.isLastPage()) {
      this.nextBtnClickEvent.emit();
    }
  };

  public isLastPage = () => {
    return this.currentPage === this.totalPages - 1;
  };
}
