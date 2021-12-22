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
import { EquipmentSeriesComponent } from './equipment-series/equipment-series.component';
import {SystemProductComponent} from "./system-product/system-product.component";
import { NewsChildComponent } from './news-child/news-child.component';
import {HighlyEfficientComponent} from "./highly-efficient/highly-efficient.component";
import { FullRangeComponent } from './full-range/full-range.component';
import { UsedEquipmentComponent } from './used-equipment/used-equipment.component';
import { RelatedEquipmentComponent } from './related-equipment/related-equipment.component';



@NgModule({
  declarations: [
    ComplexComponent,
    EquipmentComponent,
    TechnologicalComponent,
    SelectInputComponent,
    PressEventsComponent,
    PressBlogComponent,
    ExhibitionsComponent,
    SliderComponent,
    ProductCheckComponent,
    SystemProductComponent,
    HighlyEfficientComponent,
    EquipmentSeriesComponent,
    FullRangeComponent,
    UsedEquipmentComponent,
    FullRangeComponent,
    RelatedEquipmentComponent,
    NewsChildComponent
  ],
    exports: [
      ComplexComponent,
        EquipmentComponent,
        TechnologicalComponent,
        PressEventsComponent,
        PressBlogComponent,
        ExhibitionsComponent,
        SliderComponent,
        ProductCheckComponent,
        EquipmentSeriesComponent,
      FullRangeComponent,
      UsedEquipmentComponent
    ],


  imports: [
    CommonModule
  ]
})
export class UiKitModule { }
