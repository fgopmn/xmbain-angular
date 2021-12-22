import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecificationsRoutingModule } from './specifications-routing.module';
import {MainModule} from "../main/main.module";
import {UiKitModule} from "../ui-kit/ui-kit.module";
import {SpecificationsComponent} from "./specifications.component";


@NgModule({
  declarations: [
    SpecificationsComponent
  ],
  imports: [
    CommonModule,
    SpecificationsRoutingModule,
    MainModule,
    UiKitModule,
  ]
})
export class SpecificationsModule { }
