import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.scss']
})
export class SeoComponent implements OnInit {
  getList: any[] = [];
  getSlide: any[] = [];

  public isConsultationOpen:boolean = true;

  form = this.fb.group({
    name:["", [Validators.required, Validators.min(8)]],
    number:["", [Validators.required, Validators.min(8)]],
  })

  constructor(public requestService:RequestService,
              public fb: FormBuilder,
              public route: Router) { }

  ngOnInit(): void {
    this.getRequest()
    this.getRequest2()
    this.getSlider()
  }

  public openConsultation(val?:boolean) {
    this.isConsultationOpen = val ? val : !this.isConsultationOpen
  }

  getRequest(){
    this.requestService.getData(`${environment.url}${environment.seo1.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }
  getRequest2(){
    this.requestService.getData(`${environment.url}${environment.seo2.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }
  getSlider(){
    this.requestService.getData(`${environment.url}${environment.slider.get}`).subscribe((items:any) => {
      this.getSlide = items
    })
  }
}
