import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() totalPages: number = 0;
  @Input() currentPage: number = 0;
  @Input() pageSize: number = 0;

  @Output() nextBtnClickEvent = new EventEmitter();
  @Output() prevBtnClickEvent = new EventEmitter();

  protected onNextBtnClick = () => {
    this.nextBtnClickEvent.emit();
  };

  protected onPrevBtnClick = () => {
    this.prevBtnClickEvent.emit();
  };
}
