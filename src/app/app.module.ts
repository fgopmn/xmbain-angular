import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {PressComponent } from './components/press/press.component';
import {MainModule} from "./components/main/main.module";


const routes: Routes = [
  {path:"",
   loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path:"press",
    component:PressComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PressComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


