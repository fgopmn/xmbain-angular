import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../../service/request.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public isMenuOpen:boolean = true;


  ngOnInit() {

  }

  public openMenu(val?:boolean) {
    this.isMenuOpen = val ? val : !this.isMenuOpen
  }

}
