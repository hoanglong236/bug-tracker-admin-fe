import { Injectable } from '@angular/core';

import { SIGN_IN_URL, SIGN_UP_URL } from '../../api-urls';
import { SimpleHttpService } from '../common/simple-http.service';
import { AuthStorageService } from './auth-storage.service';
import { SignInRequestDTO, SignUpRequestDTO } from '../../dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly simpleHttp: SimpleHttpService,
    private readonly authStorageService: AuthStorageService
  ) {}

  signIn = (
    params: SignInRequestDTO,
    onSuccess: Function,
    onError: Function
  ) => {
    this.simpleHttp.post(SIGN_IN_URL, params).subscribe({
      next: (value: any) => {
        this.authStorageService.deleteAuthorizationToken();
        this.authStorageService.saveAuthorizationToken(
          value.authorizationToken
        );

        onSuccess();
      },
      error: (err) => onError(err),
    });
  };

  signUp = (
    params: SignUpRequestDTO,
    onSuccess: Function,
    onError: Function
  ) => {
    this.simpleHttp.post(SIGN_UP_URL, params).subscribe({
      next: () => onSuccess(),
      error: (err) => onError(err),
    });
  };

  signOut = (onSuccess: Function) => {
    this.authStorageService.deleteAuthorizationToken();
    onSuccess();
  };

  isAuthenticated = () => {
    const authToken = this.authStorageService.getAuthorizationToken();
    return authToken ? true : false;
  };
}
