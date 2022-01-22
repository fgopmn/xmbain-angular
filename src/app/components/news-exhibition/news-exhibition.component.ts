import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";

@Component({
  selector: 'app-news-exhibition',
  templateUrl: './news-exhibition.component.html',
  styleUrls: ['./news-exhibition.component.scss']
})
export class NewsExhibitionComponent implements OnInit {
  getList: any[] = [];
  days:any[]=[];
  show:any[]=[];
  showTwo:any[]=[];
  showThree:any[]=[];

  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getDays()
    this. getShow()
    this.getShowTwo()
    this.getShowThree()
  }
  getDays() {
    this.requestService.getData(`${environment.url}${environment.events.get}`).subscribe((items:any)=>{
      this.days = items
    })
  }

  getShow(){
    this.requestService.getData(`${environment.url}${environment.show.get}`).subscribe((items:any)=>{
      this.show = items
    })
  }
  getShowTwo(){
    this.requestService.getData(`${environment.url}${environment.showTwo.get}`).subscribe((items:any)=>{
      this.showTwo = items
    })
  }
  getShowThree(){
    this.requestService.getData(`${environment.url}${environment.showThree.get}`).subscribe((items:any)=>{
      this.showThree = items
    })
  }
}
