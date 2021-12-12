import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import {CompanyComponent} from "../company.component";
import {MainModule} from "../../main/main.module";


@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MainModule,
  ]
})
export class CompanyModule { }
