import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";
import {FormBuilder,  FormControl, FormGroup,Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  getList: any[] = [];
  public isApplicationOpen:boolean = true
  form = this.fb.group({
    name:["", [Validators.required, Validators.min(8)]],
    number:["", [Validators.required, Validators.min(8)]],
  })
  constructor(public requestService:RequestService,
              public fb: FormBuilder,
              public route: Router) { }

  public openApplication(val?: boolean) {
    this.isApplicationOpen = val ? val : !this.isApplicationOpen
  }


  ngOnInit(): void {
    this.getRequest()
  }
  getRequest(){

    this.requestService.getData(`${environment.url}${environment.services.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }
}
