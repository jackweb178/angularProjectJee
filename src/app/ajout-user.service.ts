import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjoutUserService {

  private apiService = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  /**
   * LoginRequest
   
  public AjoutRequest(user: any) {
    return this.http.post<any>(this.apiService+"/add", user);
  }*/
}
