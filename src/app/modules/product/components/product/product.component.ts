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
  selectedProducts: Product[];
  

  btnDeleteDisabled = true;
  btnEditDisabled = true;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }

  onSelectedProducts(selectedProducts: Product[]): void {
    this.selectedProducts = selectedProducts;
    this.btnDeleteDisabled = selectedProducts.length == 0;
    this.btnEditDisabled = selectedProducts.length != 1;
  }

  onProductEdit(): void {
    const id = this.selectedProducts[0].id;
    this.router.navigate(['products/update/' + id]);
  }

  onProductDelete(): void {
    let ids = this.selectedProducts.map(p => p.id);
    ids.forEach(id => this.productService.delete(id));
  }
 

}
