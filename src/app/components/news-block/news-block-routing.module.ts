import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsBlockComponent} from "./news-block.component";

const routes: Routes = [{
  path:'',
  component:NewsBlockComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsBlockRoutingModule { }
