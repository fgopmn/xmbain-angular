import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accessories-child',
  templateUrl: './accessories-child.component.html',
  styleUrls: ['./accessories-child.component.scss']
})
export class AccessoriesChildComponent implements OnInit {
  @Input("img")img?:string
  @Input("text")text?:string
  constructor() {}


  ngOnInit(): void {
  }

}
