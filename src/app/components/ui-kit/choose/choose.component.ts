import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {
@Input("selectTitle")selectTitle!:string
@Input("logo")logo!:string
 constructor() { }

  ngOnInit(): void {
  }

}
