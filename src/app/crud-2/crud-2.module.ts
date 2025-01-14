import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Crud2RoutingModule } from './crud-2-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    Crud2RoutingModule
  ]
})
export class Crud2Module { }
