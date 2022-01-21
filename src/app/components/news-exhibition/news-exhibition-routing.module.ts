import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {NewsExhibitionComponent} from "./news-exhibition.component";

const routes: Routes = [{
  path: '',
  component: NewsExhibitionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsExhibitionRoutingModule { }
