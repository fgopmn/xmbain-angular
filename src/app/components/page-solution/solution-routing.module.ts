import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageSolutionComponent} from "../page-solution.component";

const routes: Routes = [
  {
    path:"",
    component:PageSolutionComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionRoutingModule { }
