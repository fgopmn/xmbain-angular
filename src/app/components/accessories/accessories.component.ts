import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {
  accessories:any[] = [];

  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getAccesssories()
  }
  getAccesssories() {
    this.requestService.getData(`${environment.url}${environment.accessories.get}`).subscribe((items:any)=>{
      this.accessories = items
    })
  }

}
