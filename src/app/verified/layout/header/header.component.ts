import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'verified-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleMenuEvent = new EventEmitter();

  protected onMenuBtnClick = () => {
    this.toggleMenuEvent.emit();
  };
}
