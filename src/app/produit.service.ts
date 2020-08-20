import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiService = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  /**
   * liste des roles
   */
  public getProduit() {
    return this.http.get<any>(this.apiService+"/produit/all");
  }
}
