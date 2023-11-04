import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SimpleHttpService {
  constructor(private readonly http: HttpClient) {}

  get = (url: string) => {
    return this.http.get(url, HTTP_OPTIONS);
  };

  post = (url: string, data: any) => {
    return this.http.post(url, data, HTTP_OPTIONS);
  };

  put = (url: string, data: any) => {
    return this.http.put(url, data, HTTP_OPTIONS);
  };

  delete = (url: string) => {
    return this.http.delete(url, HTTP_OPTIONS);
  };
}
