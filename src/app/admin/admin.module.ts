import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {PressBlockAdminComponent} from "./press-block-admin/press-block-admin.component";
import {ReactiveFormsModule} from "@angular/forms";
import { AdminHeaderComponent } from './admin-header/admin-header.component';

import { AdminComponent } from './admin/admin.component';
import {RouterModule} from "@angular/router";
import { ComplexAdminComponent } from './complex-admin/complex-admin.component';
import { EventsAdminComponent } from './events-admin/events-admin.component';


@NgModule({
  declarations: [
    PressBlockAdminComponent,
    AdminHeaderComponent,
    AdminComponent,
    ComplexAdminComponent,
    EventsAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AdminModule { }