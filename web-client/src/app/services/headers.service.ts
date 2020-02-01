import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  private headers: Object;

  constructor() {
    this.headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('user:passw0rd')
      })
    };
  }

  getAuthHeaders() {
    return this.headers;
  }

}
