import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../service/request.service";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  getList: any[] = [];
  getSlide: any[] = [];

  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest()
    this.getSlider()
  }
  getRequest(){
    this.requestService.getData(`${environment.url}${environment.product.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }
  getSlider(){
    this.requestService.getData(`${environment.url}${environment.slider.get}`).subscribe((items:any) => {
      this.getSlide = items
    })
  }
}
