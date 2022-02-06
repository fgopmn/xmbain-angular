import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input('is-open') isOpenProps: boolean = false
  @Output() whenApplicationOpen: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  public closeApplication() {
    this.isOpenProps = !this.isOpenProps;
    this.whenApplicationOpen.emit(this.isOpenProps)
  }

  ngOnInit(): void {
  }
}
