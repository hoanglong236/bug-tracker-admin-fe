import { Injectable } from '@angular/core';
import { SessionStorageService } from '../common/session-storage.service';

const AUTHORIZATION_TOKEN = 'authorization-token';

@Injectable({
  providedIn: 'root',
})
export class AuthStorageService {
  constructor(private sessionStorageService: SessionStorageService) {}

  saveAuthorizationToken = (token: string) => {
    this.sessionStorageService.saveItem(AUTHORIZATION_TOKEN, token);
  };

  deleteAuthorizationToken = () => {
    this.sessionStorageService.removeItem(AUTHORIZATION_TOKEN);
  };

  getAuthorizationToken = () => {
    return this.sessionStorageService.getItem(AUTHORIZATION_TOKEN);
  };
}
