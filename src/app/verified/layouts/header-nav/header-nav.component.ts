import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'layout-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent {
  @Input() menuAriaControl: string = 'menuAriaControl';
  @Output() toggleMenuEvent = new EventEmitter();

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  protected onMenuBtnClick = () => {
    this.toggleMenuEvent.emit();
  };

  protected toggleUserProfile = () => {
    document
      .querySelector('#dropdown-user-profile')
      ?.classList.toggle('hidden');
    document
      .querySelector('#header-nav-overlay')
      ?.classList.toggle('invisible');
  };

  protected onHeaderNavOverlayMouseDown = (e: MouseEvent) => {
    e.stopPropagation();
    this.toggleUserProfile();
  };

  protected signOut = (e: MouseEvent) => {
    e.preventDefault();
    this.authService.signOut(() => console.log('Sign out successfully'));
    this.router.navigate(['/guest']);
  };
}
