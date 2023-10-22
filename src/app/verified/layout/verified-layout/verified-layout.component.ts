import { Component } from '@angular/core';

@Component({
  selector: 'verified-layout',
  templateUrl: './verified-layout.component.html',
  styleUrls: ['./verified-layout.component.scss'],
})
export class VerifiedLayoutComponent {
  protected toggleSideBar = () => {
    document.querySelector('#sideBar')?.classList.toggle('hidden');
  };
}
