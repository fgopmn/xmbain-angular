import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../../service/request.service";
import {environment} from "../../../../environments/environment.prod";

@Component({
  selector: 'app-press-blog',
  templateUrl: './press-blog.component.html',
  styleUrls: ['./press-blog.component.scss']
})
export class PressBlogComponent implements OnInit {
  getList: any[] = [];
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest()
  }
  getRequest(){
    this.requestService.getData(`${environment.url}${environment.heating.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }

}
