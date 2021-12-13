import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment.prod";
import {RequestService} from "../../../service/request.service";
@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.scss']
})
export class ExhibitionsComponent implements OnInit {
  show:any[]=[]
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getShow()

  }
  getShow(){
    this.requestService.getData(`${environment.url}${environment.show.get}`).subscribe((items:any)=>{
      this.show = items
    })
  }

}
