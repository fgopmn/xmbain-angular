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

  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getDays()

  }

  getDays() {
    this.requestService.getData(`${environment.url}${environment.events.get}`).subscribe((items:any)=>{
      this.days = items
    })
  }

}
