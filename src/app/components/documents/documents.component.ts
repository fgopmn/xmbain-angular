import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  getSlide: any[] = [];
  equipment:any[]=[]
  equipmentSeries:any[]=[]
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
   this. getSlider()
    this.getEquipment()
   this.getEquipmentSeries()
  }
  getEquipment(){
    this.requestService.getData(`${environment.url}${environment.related.get}`).subscribe((items:any) => {
      this.equipment = items
    })
  }
  getEquipmentSeries(){
    this.requestService.getData(`${environment.url}${environment.relatedTwo.get}`).subscribe((items:any) => {
      this.equipmentSeries= items
    })
  }
  getSlider(){
    this.requestService.getData(`${environment.url}${environment.slider.get}`).subscribe((items:any) => {
      this.getSlide = items
    })
  }
}
