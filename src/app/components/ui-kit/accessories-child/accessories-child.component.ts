import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accessories-child',
  templateUrl: './accessories-child.component.html',
  styleUrls: ['./accessories-child.component.scss']
})
export class AccessoriesChildComponent {
  @Input("img")img?:string
  @Input("text")text?:string
}
