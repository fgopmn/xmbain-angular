import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {
  accessories:any[] = [];
  equipment: any[] = [];
  getSlide: any[] = [];

  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getAccesssories()
    this.getEquipment()
    this.getSlider()
  }
  getAccesssories() {
    this.requestService.getData(`${environment.url}${environment.accessories.get}`).subscribe((items:any)=>{
      this.accessories = items
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
