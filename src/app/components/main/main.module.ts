import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import{RouterModule} from "@angular/router";
import {UiKitModule} from "../ui-kit/ui-kit.module";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        UiKitModule
    ]
})
export class MainModule { }
