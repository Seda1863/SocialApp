import { Injectable } from '@angular/core';
import { Model, Product } from './Model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = "http://localhost:5181/";

  constructor(private http: HttpClient, private model: Model) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'api/products');
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'api/products', product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.baseUrl + 'api/products/' + product.productId, product);
  }

  deleteProduct(product: Product): Observable<void> {
    return this.http.delete<void>(this.baseUrl + 'api/products/' + product.productId);
  }

  getProductById(id: number): Product | undefined {
    return this.model.products.find(i => i.productId === id);
  }

  saveProduct(product: Product) {
    if (product.productId === 0) {
      this.model.products.push(product);
    } else {
      const p = this.getProductById(product.productId);
      if (p) {
        p.name = product.name;
        p.price = product.price;
        p.isActive = product.isActive;
      }
    }
  }
}
