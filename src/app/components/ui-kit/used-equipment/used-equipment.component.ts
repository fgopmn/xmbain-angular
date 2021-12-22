import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-used-equipment',
  templateUrl: './used-equipment.component.html',
  styleUrls: ['./used-equipment.component.scss']
})
export class UsedEquipmentComponent implements OnInit {
  @Input("img")img?:string
  @Input("title") title?:string
  @Input("description")description?:string
  @Input("description2") description2?:string
  constructor() { }

  ngOnInit(): void {
  }

}
