import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input()img!:string
  @Input()title!:string
  @Input()text!:string

  constructor() {

  }
  ngOnInit(): void {

  }

}

