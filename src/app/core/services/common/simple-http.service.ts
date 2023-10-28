import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
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
    return this.http.get(url, httpOptions);
  };

  post = (url: string, data: any) => {
    return this.http.post(url, data, httpOptions);
  };

  put = (url: string, data: any) => {
    return this.http.put(url, data, httpOptions);
  };

  delete = (url: string) => {
    return this.http.delete(url, httpOptions);
  };
}
