import {Component, Input, OnInit} from '@angular/core';
import {SelectInputEnum} from "../../constants/select-input-enum";


@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent {
  public selectInput = SelectInputEnum
  @Input('text') textProps?: string
  @Input('type') typeProps?: SelectInputEnum = SelectInputEnum.default
}
