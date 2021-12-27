import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';

import {MainModule} from "../main/main.module";
import {PartnersComponent} from "./partners.component";


@NgModule({
  declarations: [
    PartnersComponent
  ],
  imports: [
    CommonModule,
    PartnersRoutingModule,
    MainModule
  ]
})
export class PartnersModule { }
