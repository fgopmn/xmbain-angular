import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PressBlockAdminComponent} from "./press-block-admin/press-block-admin.component";
const routes: Routes = [
  {
    path:"",
    component:PressBlockAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
