import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";

@Component({
  selector: 'app-air-heaters',
  templateUrl: './air-heaters.component.html',
  styleUrls: ['./air-heaters.component.scss']
})
export class AirHeatersComponent implements OnInit {
  constructor(public requestService:RequestService) { }
  @Input("heatNum") heatNum:any=0
  getair:any[] = [];
  heats:any[]=[]
  equipment:any[]=[]
  getSlide:any[]=[]

  ngOnInit(): void {
    this.getAir()
    this.getHeat()
    this.getEquipment()
    this.getSlider()
  }

  getAir(){
    this.requestService.getData(`${environment.url}${environment.airTC.get}`).subscribe((items:any) => {
      this.getair = items
    })
  }
  getHeat(){
    this.requestService.getData(`${environment.url}${environment.heatGenerator.get}`).subscribe((items:any)=>{
      this.heats= items
    })
  }

  getEquipment(){
    this.requestService.getData(`${environment.url}${environment.related.get}`).subscribe((items:any) => {
      this.equipment = items
    })
  }
  getSlider(){
    this.requestService.getData(`${environment.url}${environment.slider.get}`).subscribe((items:any) => {
      this.getSlide = items
    })
  }
}
