import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionExamplesRoutingModule } from './solution-examples-routing.module';
import {SolutionExamplesComponent} from "./solution-examples.component";
import {MainModule} from "../main/main.module";
import {UiKitModule} from "../ui-kit/ui-kit.module";


@NgModule({
  declarations: [SolutionExamplesComponent],
  imports: [
    CommonModule,
    SolutionExamplesRoutingModule,
    MainModule,
    UiKitModule,
  ]
})
export class SolutionExamplesModule { }
