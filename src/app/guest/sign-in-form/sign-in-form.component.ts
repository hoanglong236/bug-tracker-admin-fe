import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
  protected signInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  protected firstTimeSubmit = true;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  protected get emailControl() {
    return this.signInForm.get('email')!;
  }

  protected get passwordControl() {
    return this.signInForm.get('password')!;
  }

  protected onSubmit = () => {
    if (this.signInForm.invalid) {
      this.firstTimeSubmit = false;
      return;
    }

    this.authService.signIn(
      this.getSignInRequestDTO(),
      this.onSignInSuccess,
      this.onSignInError
    );
  };

  private getSignInRequestDTO = () => {
    const formValue = this.signInForm.value;
    return { email: formValue.email!, password: formValue.password! };
  };

  private onSignInSuccess = () => {
    this.router.navigate(['/verified']);
  };

  private onSignInError = (err: any) => {
    switch (err.status) {
      case 0:
        alert('Cannot connect to the server!');
        return;
      case 401:
        alert('Invalid username or password!');
        return;
      default:
        alert(err.error.message);
    }
  };
}
