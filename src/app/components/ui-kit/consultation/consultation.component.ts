import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  @Input('is-open') isOpenProps: boolean = true
  @Output() whenConsultationOpen: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  public closeConsultation() {
    this.isOpenProps = !this.isOpenProps;
    this.whenConsultationOpen.emit(this.isOpenProps)
  }

  ngOnInit(): void {
  }

}
