import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {PressComponent } from './components/press/press.component';
import {MainModule} from "./components/main/main.module";
import { ServicesComponent } from './components/services/services.component';
import {UiKitModule} from "./components/ui-kit/ui-kit.module";
import {ContactsComponent } from './components/contacts/contacts.component';
import {ProductComponent} from "./components/product/product.component";


const routes: Routes = [
  {
    path:"",
   loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {path:"production",
    loadChildren: () => import('./components/production/production.module').then(m => m.ProductionModule)
  },
  {path:"air-heaters",
    loadChildren: () => import('./components/air-heaters/air-heaters.module').then(m => m.AirHeatersModule)
  },
  {path:"news",
    loadChildren: () => import('./components/news/news.module').then(m => m.NewsModule)
  },
  {path:"specifications",
    loadChildren: () => import('./components/specifications/specifications.module').then(m => m.SpecificationsModule)
  },
  {path:"accessories",
    loadChildren: () => import('./components/accessories/accessories.module').then(m => m.AccessoriesModule)
  },
  {
    path:"documents",
    loadChildren: () => import('./components/documents/documents.module').then(m => m.DocumentsModule)
  },
  {
    path:"page-solution",
    loadChildren: () => import('./components/page-solution/solution.module').then(m => m.SolutionModule)
  },
  {
    path:"partners",
    loadChildren: () => import('./components/partners/partners.module').then(m => m.PartnersModule)
  },
  {
    path:"support",
    loadChildren: () => import('./components/support/support.module').then(m => m.SupportModule)
  },
  {
    path:"calculator",
    loadChildren: () => import('./components/calculator/calculator.module').then(m => m.CalculatorModule)
  },
  {
    path:"seo",
    loadChildren: () => import('./components/seo/seo.module').then(m => m.SeoModule)
  },
  {
    path:"press",
    component:PressComponent
  },
  {
    path:"services",
    component:ServicesComponent
  },
  {
    path:"contacts",
    component:ContactsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PressComponent,
    ServicesComponent,
    ProductComponent,
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


