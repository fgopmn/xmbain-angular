import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment.prod";
import {RequestService} from "../../../service/request.service";

@Component({
  selector: 'app-press-events',
  templateUrl: './press-events.component.html',
  styleUrls: ['./press-events.component.scss']
})
export class PressEventsComponent implements OnInit {
  days:any[]=[];
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this. getDays()
  }
  getDays() {
    this.requestService.getData(`${environment.url}${environment.events.get}`).subscribe((items:any)=>{
      this.days = items
    })
  }


}
