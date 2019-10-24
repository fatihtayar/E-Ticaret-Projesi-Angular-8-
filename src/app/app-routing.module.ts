import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';


const routes: Routes = [  
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductComponent},
  {path:'products/category/:categoryId',component:ProductComponent},
  {path:'product-add-1',component:ProductAddForms1Component},
  {path:'product-add-2',component:ProductAddForms2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }