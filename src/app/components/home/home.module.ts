import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {MainModule} from "../main/main.module";
import {UiKitModule} from "../ui-kit/ui-kit.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MainModule,
    UiKitModule,
    ReactiveFormsModule,
    RouterModule

  ]
})
export class HomeModule { }
