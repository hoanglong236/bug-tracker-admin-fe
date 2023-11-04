import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { matchControlsValidator } from './match-controls.validator';

@Component({
  selector: 'guest-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  protected signUpForm = this.formBuilder.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: matchControlsValidator('password', 'confirmPassword'),
    }
  );
  protected firstTimeSignUpFormSubmit = true;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  protected get nameControl() {
    return this.signUpForm.get('name')!;
  }

  protected get emailControl() {
    return this.signUpForm.get('email')!;
  }

  protected get passwordControl() {
    return this.signUpForm.get('password')!;
  }

  protected get confirmPasswordControl() {
    return this.signUpForm.get('confirmPassword')!;
  }

  protected onSignUpFormSubmit = () => {
    if (this.signUpForm.invalid) {
      this.firstTimeSignUpFormSubmit = false;
      return;
    }

    this.authService.signUp(
      this.inputsToSignUpRequestDTO(),
      this.onSignUpSuccess,
      this.onSignUpFailure
    );
  };

  private inputsToSignUpRequestDTO = () => {
    const formValue = this.signUpForm.value;
    return {
      name: formValue.name!,
      email: formValue.email!,
      password: formValue.password!,
    };
  };

  private onSignUpSuccess = () => {
    alert('Sign-up successful!');
    this.router.navigate(['/guest']);
  };

  private onSignUpFailure = (err: any) => {
    console.log(err);
    if (err.status === 0) {
      alert('Cannot connect to the server!');
    } else {
      alert(err.error.message);
    }
  };
}
