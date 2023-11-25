import { Component, ViewChild } from '@angular/core';
import { OverlayComponent } from 'src/app/shared/components/overlay/overlay.component';

@Component({
  selector: 'verified-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  @ViewChild(OverlayComponent) private overlay!: OverlayComponent;

  protected toggleSideBar = () => {
    document
      .querySelector('#sidenav-toggle')
      ?.classList.toggle('-translate-x-full');
    this.overlay.toggleVisible();
  };
}
