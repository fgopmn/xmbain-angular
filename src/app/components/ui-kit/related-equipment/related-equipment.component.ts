import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment.prod";
import {RequestService} from "../../../service/request.service";

@Component({
  selector: 'app-related-equipment',
  templateUrl: './related-equipment.component.html',
  styleUrls: ['./related-equipment.component.scss']
})
export class RelatedEquipmentComponent implements OnInit {
 public related:any[] = [];
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRelated()
  }

  getRelated(){
    this.requestService.getData(`${environment.url}${environment.related.get}`).subscribe((items:any) => {
      this.related = items
    })
  }

}
