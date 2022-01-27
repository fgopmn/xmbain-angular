import { NgModule } from '@angular/core';
import {SolutionCategoryComponent} from "./solution-category.component";
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: SolutionCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionCategoryRoutingModule { }
