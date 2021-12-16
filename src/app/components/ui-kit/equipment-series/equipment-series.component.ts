import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment.prod";
import {RequestService} from "../../../service/request.service";


@Component({
  selector: 'app-equipment-series',
  templateUrl: './equipment-series.component.html',
  styleUrls: ['./equipment-series.component.scss']
})
export class EquipmentSeriesComponent implements OnInit {
  public getList: any[] = [];
  public related:any[] = [];
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest()
    this.getRelated()
  }
  getRequest(){
    this.requestService.getData(`${environment.url}${environment.indoor.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }
  getRelated(){
    this.requestService.getData(`${environment.url}${environment.related.get}`).subscribe((items:any) => {
      this.related = items
    })
  }
}
