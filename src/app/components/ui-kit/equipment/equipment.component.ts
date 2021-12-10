import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../../service/request.service";
import {environment} from "../../../../environments/environment.prod";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  getList: any[] = [];
  constructor(public requestService:RequestService) { }
  ngOnInit(): void {
    this.getRequest()
  }
  getRequest(){

    this.requestService.getData(`${environment.url}${environment.fuel.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }
}
