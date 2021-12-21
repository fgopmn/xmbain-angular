import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment.prod";
import {RequestService} from "../../../service/request.service";

@Component({
  selector: 'app-full-range',
  templateUrl: './full-range.component.html',
  styleUrls: ['./full-range.component.scss']
})
export class FullRangeComponent implements OnInit {
  @Input("heatText")heatText?:any
  @Input("heatNumber") heatNumber?:number=0


  constructor(public requestService:RequestService) { }

  ngOnInit(): void {

  }


}
