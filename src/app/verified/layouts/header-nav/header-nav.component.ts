import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'layout-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent {
  @Input() menuToggleTargetId: string = 'targetToggleId';
  @Output() menuToggleEvent = new EventEmitter();

  protected onMenuBtnClick = () => {
    this.menuToggleEvent.emit();
  };
}
