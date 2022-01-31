import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsRoutingModule } from './documents-routing.module';
import {DocumentsComponent} from "./documents.component";
import {MainModule} from "../main/main.module";
import {UiKitModule} from "../ui-kit/ui-kit.module";


@NgModule({
  declarations: [
    DocumentsComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    MainModule,
    UiKitModule,
  ]
})
export class DocumentsModule { }
