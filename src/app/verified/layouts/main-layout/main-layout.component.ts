import { Component } from '@angular/core';

@Component({
  selector: 'verified-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  protected toggleSideBar = () => {
    document
      .querySelector('#sidenav-toggle')
      ?.classList.toggle('-translate-x-full');

    document.querySelector('#layout-backdrop')?.classList.toggle('invisible');
  };
}
