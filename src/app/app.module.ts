import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {PressComponent } from './components/press/press.component';
import {MainModule} from "./components/main/main.module";
import { ServicesComponent } from './components/services/services.component';
import {UiKitModule} from "./components/ui-kit/ui-kit.module";



const routes: Routes = [
  {path:"",
   loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path:"press",
    component:PressComponent
  },
  {
    path:"services",
    component:ServicesComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PressComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MainModule,
    UiKitModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


