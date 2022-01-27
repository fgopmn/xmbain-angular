import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import {CompanyComponent} from "./company.component";
import {MainModule} from "../main/main.module";
import {UiKitModule} from "../ui-kit/ui-kit.module";
import {NewsBlockModule} from "../news-block/news-block.module";


@NgModule({
  declarations: [CompanyComponent],
    imports: [
        CommonModule,
        CompanyRoutingModule,
        MainModule,
        UiKitModule,
        NewsBlockModule
    ]
})
export class CompanyModule { }
