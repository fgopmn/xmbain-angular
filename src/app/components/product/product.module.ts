import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ProductComponent} from "./product.component";
import {MainModule} from "../main/main.module";
import {ProductionModule} from "../production/production.module";
import {UiKitModule} from "../ui-kit/ui-kit.module";


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MainModule,
    ProductRoutingModule,
    MainModule,
    UiKitModule
  ]
})
export class ProductModule { }
