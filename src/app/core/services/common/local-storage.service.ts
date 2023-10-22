import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  clear = () => {
    window.localStorage.clear();
  };

  saveItem = (key: string, item: string) => {
    window.localStorage.removeItem(key);
    window.localStorage.setItem(key, item);
  };

  removeItem = (key: string) => {
    window.localStorage.removeItem(key);
  };

  getItem = (key: string) => {
    return window.localStorage.getItem(key);
  };
}
