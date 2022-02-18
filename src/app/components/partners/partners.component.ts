import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";
import {TaskInterface} from "../../interfaces/task";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  inviteList: TaskInterface[] = [];
  provideList: TaskInterface[] = [];
  experienceList: TaskInterface[] = [];
  educationList: TaskInterface[] = [];
  suggestionList: TaskInterface[] = [];

  public isCooperationOpen:boolean = true;

  form = this.fb.group({
    name:["", [Validators.required, Validators.min(8)]],
    number:["", [Validators.required, Validators.min(8)]],
    email: ['',Validators.pattern(/^[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9\-]+\.+[a-zA-Z0-9]{2,6}/)],
    position:[],
    company:[],
    description:[],


  })

  constructor(public requestService: RequestService,
              public fb: FormBuilder,
              public route: Router) {
  }

  ngOnInit(): void {
    this.getInvite()
    this.getProvide()
    this.getExperience()
    this.getEducation()
    this.getSuggestion()
  }

  public openCooperation(val?:boolean) {
    this.isCooperationOpen = val ? val : !this.isCooperationOpen
  }

  getInvite() {
    this.requestService.getData(`${environment.url}${environment.invite.get}`).subscribe((items: any) => {
      this.inviteList = items
    })
  }

  getProvide() {
    this.requestService.getData(`${environment.url}${environment.provide.get}`).subscribe((items: any) => {
      this.provideList = items
    })
  }

  getExperience() {
    this.requestService.getData(`${environment.url}${environment.experience.get}`).subscribe((items: any) => {
      this.experienceList = items
    })
  }

  getEducation() {
    this.requestService.getData(`${environment.url}${environment.education.get}`).subscribe((items: any) => {
      this.educationList = items
    })
  }

  getSuggestion() {
    this.requestService.getData(`${environment.url}${environment.suggestion.get}`).subscribe((items: any) => {
      this.suggestionList = items
    })
  }
}
