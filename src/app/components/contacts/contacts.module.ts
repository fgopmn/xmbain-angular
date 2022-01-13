import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import {MainModule} from "../main/main.module";
import {UiKitModule} from "../ui-kit/ui-kit.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MainModule,
    UiKitModule,
  ]
})
export class ContactsModule { }
