import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RestAPIService {
  readonly Hello = 'Hey';
  readonly baseUrl = 'https://fakestoreapi.com';
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/categories`);
  }

  getProductsList(categoryName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/category/${categoryName}`);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }

  getProductInfo(productId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/${productId}`);
  }
}
