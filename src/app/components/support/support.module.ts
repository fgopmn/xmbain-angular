import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportRoutingModule } from './support-routing.module';
import {SupportComponent} from "./support.component";
import {UiKitModule} from "../ui-kit/ui-kit.module";
import {MainModule} from "../main/main.module";


@NgModule({
  declarations: [SupportComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    UiKitModule,
    MainModule
  ]
})
export class SupportModule { }
