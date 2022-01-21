import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsExhibitionRoutingModule } from './news-exhibition-routing.module';
import {NewsExhibitionComponent} from "./news-exhibition.component";
import {MainModule} from "../main/main.module";
import {UiKitModule} from "../ui-kit/ui-kit.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NewsBlockModule} from "../news-block/news-block.module";


@NgModule({
  declarations: [  NewsExhibitionComponent],
  imports: [
    CommonModule,
    NewsExhibitionRoutingModule,
    MainModule,
    UiKitModule,
    ReactiveFormsModule,
    RouterModule,
    NewsBlockModule
  ]
})
export class NewsExhibitionModule { }
