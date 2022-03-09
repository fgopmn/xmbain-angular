import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";

@Component({
  selector: 'app-complex-admin',
  templateUrl: './complex-admin.component.html',
  styleUrls: ['./complex-admin.component.scss']
})
export class ComplexAdminComponent implements OnInit {
  @ViewChild("fo") fo:any
  press: any[] = [];
  type:string="create";

  form = new FormGroup({
    title:new FormControl(""),
    icon:new FormControl(""),
  })
  constructor(public requestService:RequestService,public formBuilder: FormBuilder) { }

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
  add() {
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
    this.requestService.create(`${environment.url}/complex`,value).subscribe(()=>{
      this.getPress()
    })
  }
  editItem(value:any){
    this.requestService.edit(`${environment.url}/complex/${this.type}`, value).subscribe(()=>{
      this.getPress()
    })
  }
  getPress(){
    this.requestService.getData(`${environment.url}${environment.complex.get}`).subscribe((items:any) => {
      this.press= items
    })
  }
  deleteItem(id:string){
    this.requestService.delete(`${environment.url}/complex/${id}`).subscribe(()=>{
      this.getPress()
    })
  }
  openForm(item:any){
    this.fo.nativeElement.style.display=`block`
    this.form.patchValue({
      title:item['title'],
      icon:item['icon'],

    })
    this.type = item.id
  }
}
