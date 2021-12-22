import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.scss']
})
export class ExhibitionsComponent implements OnInit {
  constructor() { }
  @Input("day")day?:any
  @Input("month") month?:any
  @Input("text") text?:any
  @Input("day2") day2?:any

  ngOnInit(): void {
  }

}
