import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PressRoutingModule } from './press-routing.module';
import {PressComponent} from "./press.component";
import {MainModule} from "../main/main.module";
import {UiKitModule} from "../ui-kit/ui-kit.module";


@NgModule({
  declarations: [PressComponent],
  imports: [
    CommonModule,
    PressRoutingModule,
    MainModule,
    UiKitModule
  ]
})
export class PressModule { }
