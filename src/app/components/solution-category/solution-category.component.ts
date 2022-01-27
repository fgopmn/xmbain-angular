import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";
@Component({
  selector: 'app-solution-category',
  templateUrl: './solution-category.component.html',
  styleUrls: ['./solution-category.component.scss']
})
export class SolutionCategoryComponent implements OnInit {
  getSlide:any[]=[]
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getSlider()
  }
  getSlider(){
    this.requestService.getData(`${environment.url}${environment.slider.get}`).subscribe((items:any) => {
      this.getSlide = items
    })
  }
}
