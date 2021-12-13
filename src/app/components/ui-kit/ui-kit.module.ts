import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComplexComponent} from "./complex/complex.component";
import {EquipmentComponent} from "./equipment/equipment.component";
import { TechnologicalComponent } from './technological/technological.component';
import { PressBlogComponent } from './press-blog/press-blog.component';
import { PressEventsComponent } from './press-events/press-events.component';



@NgModule({
  declarations: [ComplexComponent, EquipmentComponent, TechnologicalComponent, PressBlogComponent, PressEventsComponent],
  exports: [ComplexComponent, EquipmentComponent, TechnologicalComponent, PressEventsComponent, PressBlogComponent],
  imports: [
    CommonModule
  ]
})
export class UiKitModule { }
