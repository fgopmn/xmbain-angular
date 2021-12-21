import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment.prod";
import {RequestService} from "../../../service/request.service";
@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.scss']
})
export class ExhibitionsComponent implements OnInit {

  //show:any[]=[]
  constructor(public requestService:RequestService) { }
  @Input("day")day?:any
  @Input("month") month?:any
  @Input("text") text?:any
  @Input("day2") day2?:any

  //day?:any=""
  //month?:any=0
 // text?:any=""
  //day2?:any=""
  ngOnInit(): void {
 //  this.getShow()

  }
 // getShow(){
 //    this.requestService.getData(`${environment.url}${environment.show.get}`).subscribe((items:any)=>{this.show = items
 //     })
 //   }

}
