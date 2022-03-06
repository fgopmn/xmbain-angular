import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {PressBlockAdminComponent} from "./press-block-admin/press-block-admin.component";
import {ReactiveFormsModule} from "@angular/forms";
import { AdminHeaderComponent } from './admin-header/admin-header.component';

@NgModule({
  declarations: [PressBlockAdminComponent, AdminHeaderComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
