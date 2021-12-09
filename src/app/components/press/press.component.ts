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

  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest()
  }
  getRequest(){

    this.requestService.getData(`${environment.url}${environment.heating.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }


}
