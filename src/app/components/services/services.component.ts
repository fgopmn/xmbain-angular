import {Component, OnInit, ViewChild,ElementRef, OnDestroy} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";
import {FormBuilder,FormControl,FormGroup,Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {
  getList: any[] = [];
  //@ViewChild("p") el: any;
 // @ViewChild("button") button: any;

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
  public showAll(el:any, butt:any, read:any){
    el.classList.add("show")
    butt.style.display=`none`
    read.style.display=`block`

  }
  public closeAll(text:any, show:any, read:any){
    text.classList.remove("show")
    show.style.display=`block`;
    read.style.display=`none`

  }
}
