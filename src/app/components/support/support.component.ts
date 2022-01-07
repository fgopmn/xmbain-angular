import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  public series:string = "Выберите серию"
  public isModalOpen:boolean = true
  public isShowDocument:boolean =false
  constructor() { }

  public toggleModal(val?:boolean) {
    this.isModalOpen = (val !== undefined)? val : !this.isModalOpen
  }
  public select(val:string){
   this.toggleModal()
    this.series = val
    this.isShowDocument=!this.isShowDocument
  }
}
