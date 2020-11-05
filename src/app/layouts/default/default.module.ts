import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductModule } from 'src/app/modules/product/product.module';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductModule,
    SharedModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatSnackBarModule
  ]
})
export class DefaultModule { }
