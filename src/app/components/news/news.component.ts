import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import{RequestService} from "../../service/request.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  getAirs:any[]=[]
  equipment:any[]=[]
  text:string="Примеры теплогенераторов"
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getAir()
    this. getEquipment()
  }
  getAir(){
    this.requestService.getData(`${environment.url}${environment.airHeating.get}`).subscribe((items:any) => {
      this.getAirs = items
    })
  }
  getEquipment(){
    this.requestService.getData(`${environment.url}${environment.related.get}`).subscribe((items:any) => {
      this.equipment = items
    })
  }
}
