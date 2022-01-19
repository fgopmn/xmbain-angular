import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment.prod";
import {RequestService} from "../../../service/request.service";

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {
  complex: any[] = [];
  constructor(public requestService:RequestService) { }

  ngOnInit(): void {
    this.getComplex()
  }
  getComplex(){
    this.requestService.getData(`${environment.url}${environment.complex.get}`).subscribe((items:any) => {
      this.complex = items
    })

  }
}
