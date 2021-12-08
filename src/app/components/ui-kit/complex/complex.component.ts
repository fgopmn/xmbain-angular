import { Component, OnInit } from '@angular/core';
import{RequestService} from "../../../service/request.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.css']
})
export class ComplexComponent implements OnInit {
  getList: any[] = [];
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest()
  }
  getRequest(){

    this.requestService.getData(`${environment.url}/complex`).subscribe((items:any) => {
      this.getList = items
    })
}}
