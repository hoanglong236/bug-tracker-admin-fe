import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'guest-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  protected readonly signInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  protected onSubmit = () => {
    if (this.signInForm.invalid) {
      alert('Error: Invalid credentials or password entered');
      return;
    }

    const formValue = this.signInForm.value;
    this.authService.signIn(
      { email: formValue.email ?? '', password: formValue.password ?? '' },
      this.onSignInSuccess,
      this.onSignInFailure
    );
  };

  private onSignInSuccess = () => {
    this.router.navigate(['/verified']);
  };

  private onSignInFailure = (err: any) => {
    console.log(err);
    alert('Error: Invalid credentials or password entered');
  };
}
