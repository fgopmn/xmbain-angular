import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionRoutingModule } from './solution-routing.module';
import {PageSolutionComponent} from "../page-solution.component";

@NgModule({
  declarations: [PageSolutionComponent],
  imports: [
    CommonModule,
    SolutionRoutingModule
  ]
})
export class SolutionModule { }
