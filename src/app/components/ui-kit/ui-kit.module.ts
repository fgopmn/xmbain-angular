import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComplexComponent} from "./complex/complex.component";
import {EquipmentComponent} from "./equipment/equipment.component";
import { TechnologicalComponent } from './technological/technological.component';
import { SelectInputComponent } from './select-input/select-input.component';



@NgModule({
    declarations: [ComplexComponent, EquipmentComponent, TechnologicalComponent, SelectInputComponent, SelectInputComponent],
  exports: [ComplexComponent, EquipmentComponent,TechnologicalComponent],
  imports: [
    CommonModule
  ]
})
export class UiKitModule { }
