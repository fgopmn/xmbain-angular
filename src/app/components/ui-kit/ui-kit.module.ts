import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComplexComponent} from "./complex/complex.component";
import {EquipmentComponent} from "./equipment/equipment.component";
import { TechnologicalComponent } from './technological/technological.component';
import { PressBlogComponent } from './press-blog/press-blog.component';
import { PressEventsComponent } from './press-events/press-events.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import {SliderComponent} from "./slider/slider.component";
import {ProductCheckComponent} from "./product-check/product-check.component";




@NgModule({
  declarations: [ComplexComponent,
    EquipmentComponent,
    TechnologicalComponent,
    SelectInputComponent, PressEventsComponent,
    PressBlogComponent,
    ExhibitionsComponent,
    SliderComponent,
    ProductCheckComponent
  ],
  exports: [ComplexComponent,
    EquipmentComponent,
    TechnologicalComponent,
    PressEventsComponent,
    PressBlogComponent,
    ExhibitionsComponent,
    SliderComponent,
    ProductCheckComponent
  ],



  imports: [
    CommonModule
  ]
})
export class UiKitModule { }
