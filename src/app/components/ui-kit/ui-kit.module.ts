import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComplexComponent} from "./complex/complex.component";
import {EquipmentComponent} from "./equipment/equipment.component";
import { TechnologicalComponent } from './technological/technological.component';
import { PressBlogComponent } from './press-blog/press-blog.component';
import { PressEventsComponent } from './press-events/press-events.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { SliderComponent} from './slider/slider.component';

import { ExhibitionsComponent } from './exhibitions/exhibitions.component';




@NgModule({
  declarations: [ComplexComponent, EquipmentComponent, TechnologicalComponent, SelectInputComponent, PressEventsComponent, PressBlogComponent, ExhibitionsComponent],
  exports: [ComplexComponent, EquipmentComponent, TechnologicalComponent, PressEventsComponent, PressBlogComponent, ExhibitionsComponent],
  declarations: [ComplexComponent, EquipmentComponent, TechnologicalComponent, SelectInputComponent,

    PressEventsComponent, PressBlogComponent,SliderComponent],
  exports: [ComplexComponent, EquipmentComponent, TechnologicalComponent, PressEventsComponent, PressBlogComponent,SliderComponent
],


  imports: [
    CommonModule
  ]
})
export class UiKitModule { }
