import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.get().subscribe(products => {
      this.products = products;
      console.log("produtos recuperados", products);
    })
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }

}
