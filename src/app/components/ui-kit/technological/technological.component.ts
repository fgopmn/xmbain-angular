import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment.prod";
import {RequestService} from "../../../service/request.service";
@Component({
  selector: 'app-technological',
  templateUrl: './technological.component.html',
  styleUrls: ['./technological.component.scss']
})
export class TechnologicalComponent implements OnInit {
  getList: any[] = [];
  getList2: any[] = [];
  getList3: any[] = [];
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest()
    this.getRequest2()
    this.getRequest3()
  }

  getRequest(){

    this.requestService.getData(`${environment.url}${environment.processOne.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }
  getRequest2(){

    this.requestService.getData(`${environment.url}${environment.processTwo.get}`).subscribe((items:any) => {
      this.getList2 = items
    })
  }

  getRequest3(){

    this.requestService.getData(`${environment.url}${environment.processThree.get}`).subscribe((items:any) => {
      this.getList3 = items
    })
  }
}
