import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ProductionModule} from "../production/production.module";
import {ProductComponent} from "./product.component";
import {MainModule} from "../main/main.module";


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MainModule
  ]
})
export class ProductModule { }
