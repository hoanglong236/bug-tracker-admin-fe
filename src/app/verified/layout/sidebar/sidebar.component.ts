import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'verified-layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  ngAfterViewInit(): void {
    this.dropdown();
  }

  protected dropdown = () => {
    document.querySelector('#submenu')?.classList.toggle('hidden');
    document.querySelector('#arrow')?.classList.toggle('rotate-180');
  };

  protected signOut = () => {
    this.authService.signOut(this.onSignOutSuccess);
  };

  private onSignOutSuccess = () => {
    this.router.navigate(['/guest']);
  };
}
