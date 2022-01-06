import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductionComponent} from "../production/production.component";
import {SeoComponent} from "./seo.component";

const routes: Routes = [
  {
    path:"",
    component:SeoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeoRoutingModule { }
