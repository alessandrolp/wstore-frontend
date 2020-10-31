import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  save() : void {
    console.log("salvando produto", this.product);
    this.productService.save(this.product).subscribe(product => {
      this.router.navigate(['products']);
    });
  }

  cancel() : void {
    this.router.navigate(['products']);
  }


}
