import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../../service/request.service";
import {environment} from "../../../../environments/environment.prod";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  expandedIndex = 0;

  getList: any[] = [];

  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest()
  }

  getRequest(){

    this.requestService.getData(`${environment.url}${environment.accordion.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }
}
