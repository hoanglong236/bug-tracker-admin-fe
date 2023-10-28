import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'guest-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  protected readonly signUpForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  protected onSubmit = () => {
    if (this.signUpForm.invalid) {
      alert('Please enter a valid password or email address');
      return;
    }

    const formValue = this.signUpForm.value;
    this.authService.signUp(
      {
        name: formValue.name ?? '',
        email: formValue.email ?? '',
        password: formValue.password ?? '',
      },
      this.onSignUpSuccess,
      this.onSignUpFailure
    );
  };

  private onSignUpSuccess = () => {
    alert('Sign-up successful!');
    this.router.navigate(['/guest']);
  };

  private onSignUpFailure = (err: any) => {
    console.log(err);
  };
}
