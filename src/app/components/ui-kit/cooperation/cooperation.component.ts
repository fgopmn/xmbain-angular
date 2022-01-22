import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cooperation',
  templateUrl: './cooperation.component.html',
  styleUrls: ['./cooperation.component.scss']
})
export class CooperationComponent implements OnInit {

  @Input('is-open') isOpenProps: boolean = true
  @Output() whenCooperationOpen: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  public closeCooperation() {
    this.isOpenProps = !this.isOpenProps;
    this.whenCooperationOpen.emit(this.isOpenProps)
  }

  ngOnInit(): void {
  }

}
