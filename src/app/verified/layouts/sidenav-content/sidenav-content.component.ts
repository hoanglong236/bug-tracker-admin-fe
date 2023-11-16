import { Component } from '@angular/core';

@Component({
  selector: 'layout-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent {
  protected showCartDetails = () => {
    document.querySelector('#cart-details-items')?.classList.toggle('hidden');
    document.querySelector('#cart-arrow')?.classList.toggle('rotate-180');
  };
}
