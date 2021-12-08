import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComplexComponent} from "../complex/complex.component";
import {EquipmentComponent} from "../equipment/equipment.component";



@NgModule({
  declarations: [ComplexComponent, EquipmentComponent],
  exports: [ComplexComponent, EquipmentComponent],
  imports: [
    CommonModule
  ]
})
export class UiKitModule { }
