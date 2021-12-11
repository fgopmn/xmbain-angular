import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import{RequestService} from "../../service/request.service";
@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {
  getList: any[] = [];
  days:any[]=[];
  show:any[]=[]
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest()
    this.getDays()
    this.getShow()
  }
  getRequest(){
    this.requestService.getData(`${environment.url}${environment.heating.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }
  getDays() {
    this.requestService.getData(`${environment.url}${environment.events.get}`).subscribe((items:any)=>{
      this.days = items
    })
  }
  getShow(){
    this.requestService.getData(`${environment.url}${environment.show.get}`).subscribe((items:any)=>{
      this.show = items
    })
  }
}
