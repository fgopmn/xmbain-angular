import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  public isModalOpen:boolean = true
  constructor() { }

  public toggleModal(val?:boolean) {
    this.isModalOpen = (val !== undefined)? val : !this.isModalOpen
  }
}
