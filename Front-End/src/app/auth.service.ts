import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {
  }

  loginAuth(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  private isAuthenticated = false;

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
