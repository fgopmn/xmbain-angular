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

import { AccessoriesChildComponent } from './accessories-child/accessories-child.component';
import { ChooseComponent } from './choose/choose.component';
import { FillComponent } from './fill/fill.component';
import { ModalComponent } from './modal/modal.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {ClickOutsideModule} from "ng-click-outside";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {AccordionComponent} from "./accordion/accordion.component";
import { InstructionsComponent } from './instructions/instructions.component';
import { ApplicationComponent } from './application/application.component';
import {RouterModule} from "@angular/router";
import { ConsultationComponent } from './consultation/consultation.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SeoFilterComponent } from './seo-filter/seo-filter.component';
import { LogosComponent } from './logos/logos.component';
import { SolutionExampelsHeaderComponent } from './solution-exampels-header/solution-exampels-header.component';
import { IndustriesComponent } from './industries/industries.component';
import { SeriesComponent } from './series/series.component';
import { CooperationComponent } from './cooperation/cooperation.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { NewsSliderComponent } from './news-slider/news-slider.component';

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
    EquipmentSeriesComponent,
    FullRangeComponent,
    AccessoriesChildComponent,
    UsedEquipmentComponent,
    FullRangeComponent,
    EquipmentSeriesComponent,
    NewsChildComponent,
    ModalComponent,
    AccordionComponent,
    NewsChildComponent,
    ChooseComponent,
    FillComponent,
    InstructionsComponent,
    ApplicationComponent,
    ConsultationComponent,
    SeoFilterComponent,
    LogosComponent,
    SolutionExampelsHeaderComponent,
    IndustriesComponent,
    SeriesComponent,
    CooperationComponent,
    AdvantagesComponent,
    NewsSliderComponent
  ],
    exports: [
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
        EquipmentSeriesComponent,
        FullRangeComponent,
        AccessoriesChildComponent,
        UsedEquipmentComponent,
        FullRangeComponent,
        EquipmentSeriesComponent,
        NewsChildComponent,
        ModalComponent,
        AccordionComponent,
        NewsChildComponent,
        ChooseComponent,
        FillComponent,
        InstructionsComponent,
        ApplicationComponent,
        ConsultationComponent,
        SeoFilterComponent,
        LogosComponent,
        SolutionExampelsHeaderComponent,
        IndustriesComponent,
        SeriesComponent,
        CooperationComponent,
        AdvantagesComponent,
        NewsSliderComponent,
    ],

  imports: [
    CommonModule,
    MatExpansionModule,
    ClickOutsideModule,
    MatExpansionModule,
    CdkAccordionModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UiKitModule { }
