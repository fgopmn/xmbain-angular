import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsBlockRoutingModule } from './news-block-routing.module';
import {UiKitModule} from "../ui-kit/ui-kit.module";
import {NewsBlockComponent} from "./news-block.component";
import {MainModule} from "../main/main.module";


@NgModule({
  declarations: [NewsBlockComponent],
  imports: [
    CommonModule,
    NewsBlockRoutingModule,
    UiKitModule,
    MainModule,
  ]
})
export class NewsBlockModule { }
