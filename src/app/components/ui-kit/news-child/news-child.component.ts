import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment.prod";
import{RequestService} from "../../../service/request.service";

@Component({
  selector: 'app-news-child',
  templateUrl: './news-child.component.html',
  styleUrls: ['./news-child.component.scss']
})
export class NewsChildComponent implements OnInit {
  newsChild: any[] = [];


  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest()

  }
  getRequest(){
    this.requestService.getData(`${environment.url}${environment.newsChild.get}`).subscribe((items:any) => {
      this.newsChild = items
    })
  }


}
