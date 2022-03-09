import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";
import { FormBuilder, FormControl, FormGroup, } from '@angular/forms';
@Component({
  selector: 'app-press-block-admin',
  templateUrl: './press-block-admin.component.html',
  styleUrls: ['./press-block-admin.component.scss']
})
export class PressBlockAdminComponent implements OnInit {
  @ViewChild("fo") fo:any
  press: any[] = [];
  type:string="create";

  form = new FormGroup({
    button:new FormControl(""),
    title:new FormControl(""),
    text:new FormControl(""),
    img:new FormControl(""),
    info:new FormControl("")
  })
  constructor(public requestService:RequestService,public formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.getPress()
  }
  closeWrapper(){
    this.fo.nativeElement.style.display = `none`
  }
  openQuestion(el:any){
    el.classList.add("questionOpen")
  }
  closeItem(el:any){
    el.classList.remove("questionOpen")
  }
  reset(){
    this.form.reset()
  }
  add(fo:any) {
    this.fo.nativeElement.style.display = `block`
    this.form.reset()
    this.type = "create"
  }
  save(fo:any){
    if(this.type == "create"){
      this.createItem(this.form.value)
    }
    else{
      this.editItem(this.form.value)
    }
    fo.style.display=`none`
  }
  createItem(value:any){
    this.requestService.create(`${environment.url}/heating`,value).subscribe(()=>{
      this.getPress()
    })
  }
  editItem(value:any){
    this.requestService.edit(`${environment.url}/heating/${this.type}`, value).subscribe(()=>{
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
  openForm(items:any, fo:any){
   this.fo.nativeElement.style.display=`block`
    this.form.patchValue({
      button: items['button'],
      title:items['title'],
      text:items['text'],
      img:items['img'],
      info:items['info']
    })
    this.type = items.id
    }
}
