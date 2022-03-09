import { NgModule } from '@angular/core';
import { RouterModule,ActivatedRoute, Routes } from '@angular/router';
import {PressBlockAdminComponent} from "./press-block-admin/press-block-admin.component";
import {AdminComponent} from "./admin/admin.component";
import {ComplexAdminComponent} from "./complex-admin/complex-admin.component";
import {EventsAdminComponent} from "./events-admin/events-admin.component";
const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children: [
      {
        path:'press-block',
        component: PressBlockAdminComponent
      },
      {
        path:'complex',
        component: ComplexAdminComponent
      },
      {
        path:'events',
        component: EventsAdminComponent
      }
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
