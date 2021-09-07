import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConverterComponent} from "./converter/converter.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path:"converter", component:ConverterComponent},
  {path:"products", component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
