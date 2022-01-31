import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';

import {MainModule} from "../main/main.module";
import {PartnersComponent} from "./partners.component";
import {UiKitModule} from "../ui-kit/ui-kit.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PartnersComponent
  ],
    imports: [
        CommonModule,
        PartnersRoutingModule,
        ReactiveFormsModule,
        MainModule,
        UiKitModule
    ]
})
export class PartnersModule { }
