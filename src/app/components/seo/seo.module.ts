import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoRoutingModule } from './seo-routing.module';
import {SeoComponent} from "./seo.component";
import {MainModule} from "../main/main.module";
import {UiKitModule} from "../ui-kit/ui-kit.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [SeoComponent],
  imports: [
    CommonModule,
    SeoRoutingModule,
    MainModule,
    UiKitModule,
    ReactiveFormsModule
  ]
})
export class SeoModule { }
