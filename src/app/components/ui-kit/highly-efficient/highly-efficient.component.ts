import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment.prod";
import {RequestService} from "../../../service/request.service";
@Component({
  selector: 'app-highly-efficient',
  templateUrl: './highly-efficient.component.html',
  styleUrls: ['./highly-efficient.component.scss']
})
export class HighlyEfficientComponent implements OnInit {
  @ViewChild('img') img: any;
  public getList: any[] = [
  ]

  public image: any[] = [
    {
      id:1,
      img:"../../../../assets/air-heaters/image 2.png"
    },
    {
      id:2,
      img:"../../../../assets/air-heaters/image.big2.png"
    },
    {
      id:3,
      img:"../../../../assets/air-heaters/image.big1.png"
    },
    {
      id:4,
      img:"../../../../assets/air-heaters/image.big3.png"
    }

    // "../../../../assets/air-heaters/image 2.png",
    // "../../../../assets/air-heaters/image.big2.png",
    // "../../../../assets/air-heaters/image.big1.png",
    // "../../../../assets/air-heaters/image.big3.png",
  ];
  public  x: any = "../../../../assets/air-heaters/image 2.png"

  public isConsultationOpen:boolean = true;

  form = this.fb.group({
    name:["", [Validators.required, Validators.min(8)]],
    number:["", [Validators.required, Validators.min(8)]],
  })


  constructor( public fb: FormBuilder,
               public route: Router,
               public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest()
  }


  public openConsultation(val?:boolean) {
    this.isConsultationOpen = val ? val : !this.isConsultationOpen
  }
    public openImg(el:any){
    for (let i=0; i<this.image.length; ++i){
      if(el.id==this.image[i].id){
        this.x =this.image[i].img
      }


    }

    }

  getRequest(){
    this.requestService.getData(`${environment.url}${environment.highlyEfficientImages.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }
}
