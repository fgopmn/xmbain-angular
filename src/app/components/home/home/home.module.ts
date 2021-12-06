import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {MainModule} from "../../main/main/main.module";
import {HomeComponent} from "../home.component";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MainModule
  ]
})
export class HomeModule { }
