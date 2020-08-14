import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiService = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  /**
   * LoginRequest
   */
  public LoginRequest(user: any) {
    return this.http.post<any>(this.apiService+"/login", user);
  }

  saveToken(json)
  {
    localStorage.setItem('token', json.accessToken);
    localStorage.setItem('roles', json.authorities);
    localStorage.setItem('username', json.username);
  }
}
