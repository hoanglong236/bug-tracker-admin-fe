import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'overlay-component',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent {
  @Input() zIndex = 10;
  @Output() touchEvent = new EventEmitter();

  protected visible = false;

  toggleVisible = () => {
    this.visible = !this.visible;
  };

  protected onMouseDown = (e: MouseEvent) => {
    e.stopPropagation();
    this.touchEvent.emit();
  };
}
