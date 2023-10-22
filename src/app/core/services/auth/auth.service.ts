import { Injectable } from '@angular/core';

import { SIGN_IN_URL, SIGN_UP_URL } from '../../api-urls';
import { SimpleHttpService } from '../common/simple-http.service';
import { AuthStorageService } from './auth-storage.service';

type SignInRequestParams = {
  email: string;
  password: string;
};

type SignUpRequestParams = {
  name: string;
  email: string;
  password: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private simpleHttp: SimpleHttpService,
    private authStorageService: AuthStorageService
  ) {}

  signIn(
    params: SignInRequestParams,
    onResolve: Function,
    onReject: Function
  ): void {
    this.simpleHttp.post(SIGN_IN_URL, params).subscribe({
      next: (value: any) => {
        this.authStorageService.deleteAuthorizationToken();
        this.authStorageService.saveAuthorizationToken(
          value.authorizationToken
        );

        onResolve();
      },
      error: (err: any) => onReject(err),
    });
  }

  signUp(
    params: SignUpRequestParams,
    onResolve: Function,
    onReject: Function
  ): void {
    this.simpleHttp.post(SIGN_UP_URL, params).subscribe({
      next: () => onResolve(),
      error: (err: any) => onReject(err),
    });
  }

  signOut(onResolve: Function): void {
    this.authStorageService.deleteAuthorizationToken();
    onResolve();
  }
}
