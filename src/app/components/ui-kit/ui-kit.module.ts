import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComplexComponent} from "./complex/complex.component";
import {EquipmentComponent} from "./equipment/equipment.component";
import { TechnologicalComponent } from './technological/technological.component';



@NgModule({
  declarations: [ComplexComponent, EquipmentComponent, TechnologicalComponent],
  exports: [ComplexComponent, EquipmentComponent,TechnologicalComponent],
  imports: [
    CommonModule
  ]
})
export class UiKitModule { }
