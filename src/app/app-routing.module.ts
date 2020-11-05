import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProductCreateComponent } from './modules/product/components/product/product-create/product-create.component';
import { ProductComponent } from './modules/product/components/product/product.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
    children : [{
      path: '',
      component: DashboardComponent
    },{
      path: 'products',
      component: ProductComponent,
    },{
      path: 'products/create',
      component: ProductCreateComponent
    },{
      path: 'products/update/:id',
      component: ProductCreateComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
