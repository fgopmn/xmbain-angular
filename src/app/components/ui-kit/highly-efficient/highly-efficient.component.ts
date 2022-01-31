import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-highly-efficient',
  templateUrl: './highly-efficient.component.html',
  styleUrls: ['./highly-efficient.component.scss']
})
export class HighlyEfficientComponent implements OnInit {

  public isConsultationOpen:boolean = true;

  form = this.fb.group({
    name:["", [Validators.required, Validators.min(8)]],
    number:["", [Validators.required, Validators.min(8)]],
  })


  constructor( public fb: FormBuilder,
               public route: Router) { }

  ngOnInit(): void {
  }


  public openConsultation(val?:boolean) {
    this.isConsultationOpen = val ? val : !this.isConsultationOpen
  }


}
