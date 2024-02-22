import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { Product } from './Model';

describe('ProductService', () => {
  let productService: ProductService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });

    productService = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  it('should get products', () => {
    const dummyProducts: Product[] = [
      new Product(1, 'Product 1', 100, true),
      new Product(2, 'Product 2', 200, false)
    ];

    productService.getProducts().subscribe((products) => {
      expect(products).toBeTruthy();
      expect(products.length).toBe(2);
      expect(products).toEqual(dummyProducts);
    });

    const req = httpTestingController.expectOne('http://localhost:5181/api/products');
    expect(req.request.method).toBe('GET');
    req.flush(dummyProducts);
  });

  it('should add product', () => {
    const newProduct: Product = new Product(3, 'Product 3', 300, true);

    productService.addProduct(newProduct).subscribe((product) => {
      expect(product).toBeTruthy();
      expect(product).toEqual(newProduct);
    });

    const req = httpTestingController.expectOne('http://localhost:5181/api/products');
    expect(req.request.method).toBe('POST');
    req.flush(newProduct);
  });

});
