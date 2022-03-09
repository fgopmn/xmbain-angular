import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {RequestService} from "../../service/request.service";

@Component({
  selector: 'app-events-admin',
  templateUrl: './events-admin.component.html',
  styleUrls: ['./events-admin.component.scss']
})
export class EventsAdminComponent implements OnInit {
  @ViewChild("fo") fo:any
  press: any[] = [];
  type:string="create";

  form = new FormGroup({
    day:new FormControl(""),
    month:new FormControl(""),
    text:new FormControl(""),

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
    this.requestService.create(`${environment.url}/events`,value).subscribe(()=>{
      this.getPress()
    })
  }
  editItem(value:any){
    this.requestService.edit(`${environment.url}/events/${this.type}`, value).subscribe(()=>{
      this.getPress()
    })
  }
  getPress(){
    this.requestService.getData(`${environment.url}${environment.events.get}`).subscribe((items:any) => {
      this.press= items
    })
  }
  deleteItem(id:string){
    this.requestService.delete(`${environment.url}/events/${id}`).subscribe(()=>{
      this.getPress()
    })
  }
  openForm(items:any, fo:any){
    this.fo.nativeElement.style.display=`block`
    this.form.patchValue({
      day: items['day'],
      month:items['month'],
      text:items['text'],
    })
    this.type = items.id
  }
}
