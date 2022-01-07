import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-full-range',
  templateUrl: './full-range.component.html',
  styleUrls: ['./full-range.component.scss']
})

export class FullRangeComponent implements OnInit {
  @Input("heatText") heatText!: any
  @Input("heatNumber") heatNumber: number = 0
  @Input("heatAbout") heatAbout?: string

  public or: boolean = true

  constructor() {
  }

  ngOnInit(): void {
    this.zero()
  }

  zero() {
    if (this.heatNumber < 10) {
      this.or = true
    } else {
      this.or = false
    }
  }


}
