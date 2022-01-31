import {Component, Input, OnInit} from '@angular/core';
import {RequestService} from "../../../service/request.service";
import {environment} from "../../../../environments/environment.prod";
import {SelectInputEnum} from "../../constants/select-input-enum";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  @Input("title")title?:string="Подберите свое оборудование"
  @Input("titleSpan")titleSpan?:string="прямо сейчас"
  public getList: any[] = [];
  public selectInput = SelectInputEnum

  constructor(public requestService:RequestService) { }
  ngOnInit(): void {
    this.getRequest()

  }
  getRequest(){
    this.requestService.getData(`${environment.url}${environment.fuel.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }

}
