import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public isApplicationOpen:boolean = true;
  ngOnInit() {

  }

  public openApplication(val?:boolean) {
    this.isApplicationOpen = val ? val : !this.isApplicationOpen
  }

}
