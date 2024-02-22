import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Model';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = [];
  }

  addProduct(name: string, price: string, isactive: boolean) {
    const parsedPrice = parseFloat(price);
    const p = new Product(0, name, parsedPrice, isactive);
  
    this.productService.addProduct(p).subscribe(product => {
      this.products.push(product);
    });
  }
  
 
}
