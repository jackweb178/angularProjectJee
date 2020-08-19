import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiService = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  /**
   * liste des users
   */
  public getUser() {
    return this.http.get<any>(this.apiService+"/all");
  }

  public AjoutRequest(user: any) {
    return this.http.post<any>(this.apiService+"/add", user);
  }
}
