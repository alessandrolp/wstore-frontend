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

  update(product: Product) : Observable<Product> {
    const url = this.baseUrl + "/" + product.id;
    return this.httpClient.put<Product>(url, product);
  }

  findById(id: string) : Observable<Product> {
    const url = this.baseUrl + '/' + id;
    return this.httpClient.get<Product>(url);
  }

  delete(ids: number[]) : Promise<void[]> {
    let promises = ids.map((id) => this.deleteRecursive(id));
    return Promise.all(promises);
  }

  private deleteRecursive(id: number) : Promise<void>{
    return new Promise((resolve) => {
      const url = this.baseUrl + '/' + id;
      this.httpClient.delete(url).subscribe(() => resolve());
    })
  }

}
