import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.scss']
})
export class SeoComponent implements OnInit {
  getList: any[] = [];
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest()
    this.getRequest2()
  }
  getRequest(){
    this.requestService.getData(`${environment.url}${environment.seo1.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }
  getRequest2(){
    this.requestService.getData(`${environment.url}${environment.seo2.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }
}
