import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input('is-open') isOpenProps: boolean = true
  @Output() whenModalOpen: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() {
  }

  public closeModal() {
    this.isOpenProps = false
    this.whenModalOpen.emit(this.isOpenProps)
  }
}
