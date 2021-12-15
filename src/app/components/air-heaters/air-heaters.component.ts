import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";

@Component({
  selector: 'app-air-heaters',
  templateUrl: './air-heaters.component.html',
  styleUrls: ['./air-heaters.component.scss']
})
export class AirHeatersComponent implements OnInit {

  constructor(public requestService:RequestService) { }
  getair: any[] = [];

  ngOnInit(): void {
    this.getAir()
  }

  getAir(){
    this.requestService.getData(`${environment.url}${environment.airTC.get}`).subscribe((items:any) => {
      this.getair = items
    })
  }
}
