import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionRoutingModule } from './solution-routing.module';
import {PageSolutionComponent} from "./page-solution.component";
import{MainModule} from "../main/main.module"
import {UiKitModule} from "../ui-kit/ui-kit.module";

@NgModule({
  declarations: [PageSolutionComponent],
    imports: [
        CommonModule,
        SolutionRoutingModule,
        MainModule,
        UiKitModule
    ]
})
export class SolutionModule { }
