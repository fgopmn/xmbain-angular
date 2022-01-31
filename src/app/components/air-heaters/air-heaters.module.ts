import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirHeatersRoutingModule } from './air-heaters-routing.module';
import {AirHeatersComponent} from "./air-heaters.component";
import {MainModule} from "../main/main.module";
import {UiKitModule} from "../ui-kit/ui-kit.module";


@NgModule({
  declarations: [AirHeatersComponent],
  imports: [
    CommonModule,
    AirHeatersRoutingModule,
    MainModule,
    UiKitModule,
  ]
})
export class AirHeatersModule { }
