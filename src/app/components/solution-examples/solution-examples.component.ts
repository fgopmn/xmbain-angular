import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";

@Component({
  selector: 'app-solution-examples',
  templateUrl: './solution-examples.component.html',
  styleUrls: ['./solution-examples.component.scss']
})
export class SolutionExamplesComponent implements OnInit {
  technoImg: any[] = []
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getImg()
  }
  getImg() {
    this.requestService.getData(`${environment.url}${environment.technoImg.get}`).subscribe((items:any)=>{
      this.technoImg = items
    })
  }
}
