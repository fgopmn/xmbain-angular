import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionCategoryRoutingModule } from './solution-category-routing.module';
// import {UiKitModule} from "../ui-kit/ui-kit.module";
import {SolutionCategoryComponent} from "./solution-category.component";
import {MainModule} from "../main/main.module";
import {UiKitModule} from "../ui-kit/ui-kit.module";
@NgModule({
  declarations: [SolutionCategoryComponent],
  imports: [
    CommonModule,
    SolutionCategoryRoutingModule,
    MainModule,
    UiKitModule
  ]
})
export class SolutionCategoryModule { }
