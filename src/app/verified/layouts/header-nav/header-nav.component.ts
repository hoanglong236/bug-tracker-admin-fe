import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { OverlayComponent } from 'src/app/shared/components/overlay/overlay.component';

@Component({
  selector: 'layout-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent {
  @Input() menuAriaControl: string = 'menuAriaControl';
  @Output() toggleMenuEvent = new EventEmitter();

  @ViewChild(OverlayComponent) private overlay!: OverlayComponent;

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
    this.overlay.toggleVisible();
  };

  protected signOut = (e: MouseEvent) => {
    e.preventDefault();
    this.authService.signOut(() => console.log('Sign out successfully'));
    this.router.navigate(['/guest']);
  };
}
