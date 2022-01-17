import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import{RequestService} from "../../service/request.service";
@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.scss']
})
export class SpecificationsComponent implements OnInit {
  equipment:any[]=[]
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this. getEquipment()
  }
  getEquipment(){
    this.requestService.getData(`${environment.url}${environment.related.get}`).subscribe((items:any) => {
      this.equipment = items
    })
  }
}
