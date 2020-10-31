import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:8080/product";

  constructor(private httpClient: HttpClient) { }

  get() : Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  save(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product);
  }

}
