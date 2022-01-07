import {Component, Input, OnInit} from '@angular/core';
import{RequestService} from "../../../service/request.service";
import {environment} from "../../../../environments/environment.prod";

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.scss']
})
export class ComplexComponent implements OnInit {
  @Input("title") title!:string
  @Input("icon") icon!:string
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {

  }

}
