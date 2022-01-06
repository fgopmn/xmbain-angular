import {Component, Input, OnInit} from '@angular/core';
import {RequestService} from "../../service/request.service";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-company',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {
  technoImg: any[] = []
  system:any[]=[]
  systemTwo:any[]=[]
  systemThree:any[]=[]
  systemFour:any[]=[]


  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getImg()
    this.getSystem()
    this.getSystemTwo()
    this. getSystemThree()
    this. getSystemFour()
  }

  getImg() {
    this.requestService.getData(`${environment.url}${environment.technoImg.get}`).subscribe((items:any)=>{
      this.technoImg = items
    })
  }
  getSystem(){
    this.requestService.getData(`${environment.url}${environment.system.get}`).subscribe((items:any) => {
      this.system = items
    })
  }
  getSystemTwo(){
    this.requestService.getData(`${environment.url}${environment.systemTwo.get}`).subscribe((items:any) => {
      this.systemTwo = items
    })
  }
  getSystemThree(){
    this.requestService.getData(`${environment.url}${environment.systemThree.get}`).subscribe((items:any) => {
      this.systemThree= items
    })
  }
  getSystemFour(){
    this.requestService.getData(`${environment.url}${environment.systemFour.get}`).subscribe((items:any) => {
      this.systemFour= items
    })
  }

}
