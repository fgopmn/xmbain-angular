import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.scss']
})
export class FillComponent implements OnInit {
@Input("logo")logo!:string
@Input("selectTitle")selectTitle!:string
@Input("square")square!:string
@Input("mm")mm!:string
  constructor() { }

  ngOnInit(): void {
  }

}
