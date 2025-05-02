import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  private api = "http://localhost:8080/authentication"

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      `${this.api}/login`,
      {username, password}
    )
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(
      `${this.api}/register`,
      {username, password}
    )
  }

  isTokenValid(token: string): Observable<any> {
    return this.http.get(
      `${this.api}/token`,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${token}`
        })
      }
    )
  }

  getToken(): string {
    return <string>localStorage.getItem("token");
  }

  saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  removeToken() {
    localStorage.removeItem("token");
  }

}
