import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionRoutingModule } from './production-routing.module';
import {ProductionComponent} from "./production.component";
import {MainModule} from "../main/main.module";
import {UiKitModule} from "../ui-kit/ui-kit.module";


@NgModule({
  declarations: [ProductionComponent],
  imports: [
    CommonModule,
    ProductionRoutingModule,
    MainModule,
    UiKitModule,
  ]
})
export class ProductionModule { }
