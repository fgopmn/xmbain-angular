import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import{RequestService} from "../../service/request.service";
import {TaskInterface} from "../../interfaces/task";



@Component({
  selector: 'app-page-solution',
  templateUrl: './page-solution.component.html',
  providers:[],
  styleUrls: ['./page-solution.component.scss']
})
export class PageSolutionComponent implements OnInit{
  taskList:TaskInterface[]=[];
  advantages:TaskInterface[]=[];
  solution:TaskInterface[]=[];
  used:any[]=[];
  getSlide: any[] = [];

  constructor(public requestService:RequestService) {

  }
  ngOnInit(): void {
    this.getTask()
    this.getAdvantages()
    this.getSolution()
    this.getUsed()
    this. getSlider()
  }
  getTask(){
    this.requestService.getData(`${environment.url}${environment.task.get}`).subscribe((items:any) => {
      this.taskList = items
    })
  }
  getAdvantages(){
    this.requestService.getData(`${environment.url}${environment.advantages.get}`).subscribe((items:any) => {
      this.advantages = items
    })
  }
  getSolution(){
    this.requestService.getData(`${environment.url}${environment.solution.get}`).subscribe((items:any) =>{
      this.solution = items
    })
  }
  getUsed(){
    this.requestService.getData(`${environment.url}${environment.used.get}`).subscribe((items:any) =>{
      this.used = items
      console.log(this.used)
    })
  }
  getSlider(){
    this.requestService.getData(`${environment.url}${environment.slider.get}`).subscribe((items:any) => {
      this.getSlide = items
    })
  }
}
