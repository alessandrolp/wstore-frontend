import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  horizontalPositionAlert: MatSnackBarHorizontalPosition = 'right';
  verticalPositionAlert: MatSnackBarVerticalPosition = 'top';

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.productService.findById(id).subscribe(product => {
        this.product = product;
      });
    }
  }

  save() : void {
    console.log("salvando produto", this.product);
    this.productService.save(this.product).subscribe(product => {
      this.snackBar.open('Produto salvo com sucesso!', 'X', {
        duration: 3000,
        horizontalPosition: this.horizontalPositionAlert,
        verticalPosition: this.verticalPositionAlert
      });
      this.router.navigate(['products']);
    });
  }

  cancel() : void {
    this.router.navigate(['products']);
  }


}
