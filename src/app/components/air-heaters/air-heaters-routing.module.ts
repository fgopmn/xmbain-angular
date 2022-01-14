import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AirHeatersComponent} from "./air-heaters.component";

const routes: Routes = [{
  path: '',
  component: AirHeatersComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirHeatersRoutingModule { }
