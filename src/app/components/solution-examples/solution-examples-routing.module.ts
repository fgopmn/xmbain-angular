import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SolutionExamplesComponent} from "./solution-examples.component";

const routes: Routes = [{
  path: '',
  component: SolutionExamplesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionExamplesRoutingModule { }
