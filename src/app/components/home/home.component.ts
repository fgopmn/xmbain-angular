import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import{RequestService} from "../../service/request.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  getList: any[] = [];
  day:string="17"
  day2:string="20"
  month:string="сентября"
  text:string="Mostra Convengo Expocomfort 2020"

  constructor(public requestService:RequestService) { }
  ngOnInit() {
    this.getRequest()

  }
  getRequest(){
    this.requestService.getData(`${environment.url}${environment.complexService.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }



}
