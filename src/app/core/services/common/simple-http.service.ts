import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SimpleHttpService {
  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get(url, httpOptions);
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data, httpOptions);
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(url, data, httpOptions);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url, httpOptions);
  }
}
