import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsBlockRoutingModule } from './news-block-routing.module';
import {UiKitModule} from "../ui-kit/ui-kit.module";
import {NewsBlockComponent} from "./news-block.component";
import {MainModule} from "../main/main.module";
import {NewsStoriesComponent} from "../ui-kit/news-stories/news-stories.component";


@NgModule({
    declarations: [NewsBlockComponent, NewsStoriesComponent],
    exports: [
        NewsStoriesComponent
    ],
    imports: [
        CommonModule,
        NewsBlockRoutingModule,
        UiKitModule,
        MainModule,
    ]
})
export class NewsBlockModule { }
