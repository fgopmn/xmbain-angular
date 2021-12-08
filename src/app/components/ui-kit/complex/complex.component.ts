import { Component, OnInit } from '@angular/core';
import{RequestService} from "../../../service/request.service";
import {environment} from "../../../../environments/environment.prod";

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.scss']
})
export class ComplexComponent implements OnInit {
  getList: any[] = [];
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest()
  }
  getRequest(){

    this.requestService.getData(`${environment.url}${environment.complex.get}`).subscribe((items:any) => {
      this.getList = items
    })
}}
