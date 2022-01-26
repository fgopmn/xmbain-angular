import {Component, Input, OnInit} from '@angular/core';
import {RequestService} from "../../../service/request.service";
import {environment} from "../../../../environments/environment.prod";
// import {SlideEnum} from "../../constants/slide-enum";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  // getList: any[] = [];
  // public typeofSlider = SlideEnum
  @Input()img!:string
  @Input()title!:string
  @Input()text!:string
  constructor(public requestService:RequestService) { }
  ngOnInit(): void {
    // this.getRequest()
  }
  // getRequest(){
  //   this.requestService.getData(`${environment.url}${environment.slider.get}`).subscribe((items:any) => {
  //     this.getList = items
  //   })
  // }

}

