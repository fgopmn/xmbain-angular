import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AirHeatersComponent} from "../air-heaters/air-heaters.component";
import {ContactsComponent} from "./contacts.component";

const routes: Routes = [{
  path: '',
  component: ContactsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
