import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import{RequestService} from "../../service/request.service";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 complex: any[] = [];
  getList: any[] = [];
  getSlide: any[] = [];
  day:string="17";
  day2:string="20";
  month:string="сентября";
  text:string="Mostra Convengo Expocomfort 2020";

  public isApplicationOpen:boolean = true;

  form = this.fb.group({
    name:["", [Validators.required, Validators.min(8)]],
    number:["", [Validators.required, Validators.min(8)]],
  })
  constructor(public requestService:RequestService,
              public fb: FormBuilder,
              public route: Router) { }

  ngOnInit() {
    this.getRequest()
    this.getComplex()
    this.getSlider()
  }

  public openApplication(val?:boolean) {
    this.isApplicationOpen = val ? val : !this.isApplicationOpen
  }

  getRequest(){
    this.requestService.getData(`${environment.url}${environment.complexService.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }
  getComplex(){
    this.requestService.getData(`${environment.url}${environment.complex.get}`).subscribe((items:any) => {
      this.complex = items
    })
  }
  getSlider(){
   this.requestService.getData(`${environment.url}${environment.slider.get}`).subscribe((items:any) => {
      this.getSlide = items
     })
    }
}
