import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  clear = () => {
    window.sessionStorage.clear();
  };

  saveItem = (key: string, item: string) => {
    window.sessionStorage.removeItem(key);
    window.sessionStorage.setItem(key, item);
  };

  removeItem = (key: string) => {
    window.sessionStorage.removeItem(key);
  };

  getItem = (key: string) => {
    return window.sessionStorage.getItem(key);
  };
}
