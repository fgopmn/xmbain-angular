import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-full-range',
  templateUrl: './full-range.component.html',
  styleUrls: ['./full-range.component.scss']
})

export class FullRangeComponent implements OnInit {
  @Input("heatText")heatText?:any
  @Input("heatNumber") heatNumber?:number=0

  constructor() { }

  ngOnInit(): void {

  }


}
