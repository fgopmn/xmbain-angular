import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesRoutingModule } from './accessories-routing.module';
import {AccessoriesComponent} from "./accessories.component";
import {UiKitModule} from "../ui-kit/ui-kit.module";
import {MainModule} from "../main/main.module";


@NgModule({
  declarations: [
    AccessoriesComponent
  ],
    imports: [
        CommonModule,
        AccessoriesRoutingModule,
        UiKitModule,
        MainModule
    ]
})
export class AccessoriesModule { }
