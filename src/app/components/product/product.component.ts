import {Component, OnInit, ViewChild} from '@angular/core';
import {RequestService} from "../../service/request.service";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  getList: any[] = [];
  getSlide: any[] = [];
  @ViewChild('p') p: any;
  @ViewChild('button') button: any;

  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest()
    this.getSlider()
    this.showAll()
    this.close()
  }
  getRequest(){
    this.requestService.getData(`${environment.url}${environment.product.get}`).subscribe((items:any) => {
      this.getList = items
    })
  }
  getSlider(){
    this.requestService.getData(`${environment.url}${environment.slider.get}`).subscribe((items:any) => {
      this.getSlide = items
    })
  }

  public showAll() {
    this.p.nativeElement.style.overflow = `visible`
    this.p.nativeElement.style.height = `auto`
    this.button.nativeElement.style.display = `none`

  }
  public close() {
    this.p.nativeElement.style.overflow = `hidden`
    this.p.nativeElement.style.height = `120px`
    this.button.nativeElement.style.display = `block`
  }

}
