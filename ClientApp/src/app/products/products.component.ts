import { Component, OnInit,Input } from '@angular/core';
import { Model, Product } from '../Model';
import { ProductService } from '../product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[]=[];
  //products: Product[] = [];
  selectedProduct: Product | undefined;
  

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
      this.productService.getProducts().subscribe(products =>
      {
        this.products = products
      });
  }

  onSelectProduct(product: Product) {
    this.selectedProduct = product;
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(p=> {
      this.products.splice(this.products.findIndex(p=>p.productId == product.productId),1)
    });
  }

 

}