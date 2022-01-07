import {Component, Input, OnInit} from '@angular/core';
import {RequestService} from "../../../service/request.service";


@Component({
  selector: 'app-equipment-series',
  templateUrl: './equipment-series.component.html',
  styleUrls: ['./equipment-series.component.scss']
})
export class EquipmentSeriesComponent {
  @Input("title")title!:string
  @Input("img")img!:string
  @Input("about")about!:string
  @Input("text")text!:string


  constructor(public requestService:RequestService) { }
}
