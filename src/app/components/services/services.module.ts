import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import {MainModule} from "../main/main.module";
import {UiKitModule} from "../ui-kit/ui-kit.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ServicesComponent} from "./services.component";


@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MainModule,
    UiKitModule,
    ReactiveFormsModule
  ]
})
export class ServicesModule { }
