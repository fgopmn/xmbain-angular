import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import {NewsComponent} from "./news.component";
import {UiKitModule} from "../ui-kit/ui-kit.module";
import {MainModule} from "../main/main.module";
import {A11yModule} from "@angular/cdk/a11y";


@NgModule({
  declarations: [NewsComponent],
    imports: [
        CommonModule,
        NewsRoutingModule,
        UiKitModule,
        MainModule,
        A11yModule
    ]
})
export class NewsModule { }
