import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'layout-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent {
  @Input() targetToggleId: string = 'targetToggleId';
  @Output() toggleEvent = new EventEmitter();

  protected onMenuBtnClick = () => {
    this.toggleEvent.emit();
  };
}
