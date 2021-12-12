import { Component, OnInit } from '@angular/core';
import{RequestService} from "../../service/request.service";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  getList: any[] = [];
  getList2:any[]=[];
  getList3:any[]=[]
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest()
    this.getRequest2()
    this.getRequest3()
  }
  getRequest(){
    this.requestService.getData(`${environment.url}${environment.contacts.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }
  getRequest2(){
    this.requestService.getData(`${environment.url}${environment.contacts2.get}`).subscribe((items:any) => {
      this.getList2 = items
    })
  }
  getRequest3(){
    this.requestService.getData(`${environment.url}${environment.contacts3.get}`).subscribe((items:any) => {
      this.getList3 = items
    })
  }
}
