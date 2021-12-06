import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import {HomeComponent} from "./components/home/home.component";
import {EquipmentComponent} from "./components/ui-kit/equipment/equipment.component";
import {RouterModule, Routes} from "@angular/router";
import {FooterComponent} from "./components/main/footer/footer.component";

const routes:Routes=[
  {
    path:"",
    component:HomeComponent
  }
  ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EquipmentComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


