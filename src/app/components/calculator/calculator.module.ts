import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import {MainModule} from "../main/main.module";
import {CalculatorComponent} from "./calculator.component";
import {UiKitModule} from "../ui-kit/ui-kit.module";

@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    MainModule,
    UiKitModule
  ]
})
export class CalculatorModule { }
