import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  @Input('is-open') isOpenProps: boolean = true
  @Output() whenApplicationOpen: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  public closeApplication() {
    this.isOpenProps = false
    this.whenApplicationOpen.emit(this.isOpenProps)
  }

  ngOnInit(): void {
  }
}
