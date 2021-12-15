import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../../service/request.service";
import {environment} from "../../../../environments/environment.prod";


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  getList: any[] = [];
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest()
  }
  getRequest(){

    this.requestService.getData(`${environment.url}${environment.slider.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }}

