import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";
import { FormBuilder, FormControl, FormGroup, } from '@angular/forms';
@Component({
  selector: 'app-press-block-admin',
  templateUrl: './press-block-admin.component.html',
  styleUrls: ['./press-block-admin.component.scss']
})
export class PressBlockAdminComponent implements OnInit {
  press: any[] = [];
  contactForm;

  type:string="create";

  // form = new FormGroup({
  //   button:new FormControl(""),
  //   title:new FormControl(""),
  //   text:new FormControl(""),
  //   img:new FormControl(""),
  //   info:new FormControl("")
  // })
  constructor(public requestService:RequestService,public formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      butt:[],
      title: [],
      text: [],
      img: [],
      info: [],
    })
  }
  ngOnInit(): void {
    this.getPress()
  }
  get getButtonControl():FormControl{
    return (this.contactForm.get('butt') as FormControl);
  }
  save(item:any){
    console.log(item)
    this.editItem(this.contactForm.value)
    console.log(this.contactForm.value)
    // if(this.type == "create"){
    //   this.createItem(this.form.value)
    // }
    // else{
    //   this.editItem(this.form.value)
    // }
  }
  // add(){
  //  // this.type="create"
  //   this.form.reset();
  // }
  createItem(value:any){
    this.requestService.create(`${environment.url}/heating`,value).subscribe(()=>{
      this.getPress()
    })
  }
  editItem(value:any){
    this.requestService.edit(`${environment.url}/heating/`,value).subscribe(()=>{
     // this.type="create"
      this.getPress()
    })
  }
  getPress(){
    this.requestService.getData(`${environment.url}${environment.heating.get}`).subscribe((items:any) => {
      this.press= items
    })
  }
  deleteItem(id:string){
    this.requestService.delete(`${environment.url}/heating/${id}`).subscribe(()=>{
      this.getPress()

    })
  }

}
