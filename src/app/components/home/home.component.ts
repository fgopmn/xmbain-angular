import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
//import {ComplexComponent} from "../ui-kit/complex/complex.component";
import{RequestService} from "../../service/request.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  getList: any[] = [];
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
