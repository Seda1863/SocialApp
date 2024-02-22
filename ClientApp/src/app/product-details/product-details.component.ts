import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Model';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product | undefined;
  @Input() products: Product[]=[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(name: string, price: string, isactive: boolean) {
    const parsedPrice = parseFloat(price);

    if (this.product) {
      const p = new Product(this.product.productId, name, parsedPrice, isactive);
      this.productService.
      updateProduct(p)
      .subscribe(result => { this.products.splice(this.products.findIndex(x=>x.productId==p.productId),1,p);
      });
      this.product = undefined;
    }
  }

  parsePrice(value: string): number {
    return parseFloat(value);
  }
}
