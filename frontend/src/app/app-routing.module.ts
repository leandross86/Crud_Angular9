import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from'./views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  }, 
  {
    path: "products/create",
    component: ProductsCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
