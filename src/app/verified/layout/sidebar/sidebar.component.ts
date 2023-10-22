import { Component } from '@angular/core';

@Component({
  selector: 'verified-layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor() {
    this.dropdown();
  }

  protected dropdown() {
    document.querySelector('#submenu')?.classList.toggle('hidden');
    document.querySelector('#arrow')?.classList.toggle('rotate-180');
  }

  protected openSidebar() {
    document.querySelector('.sidebar')?.classList.toggle('hidden');
  }
}
