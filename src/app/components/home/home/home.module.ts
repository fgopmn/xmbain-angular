import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "../home.component";
import {MainModule} from "../../main/main.module";
import {UiKitModule} from "../../ui-kit/ui-kit/ui-kit.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MainModule,
    UiKitModule
  ]
})
export class HomeModule { }
