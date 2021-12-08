import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {HeaderComponent} from "./components/main/header/header.component";
import {FooterComponent} from "./components/main/footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {ComplexComponent } from './components/ui-kit/complex/complex.component';

const routes: Routes = [
  {path:"",
   component:HomeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ComplexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


