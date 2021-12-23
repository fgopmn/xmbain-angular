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
import {SpecificationsComponent } from './components/specifications/specifications.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import {AccessoriesModule} from "./components/accessories/accessories.module";
import { SeoComponent } from './components/seo/seo.component';







const routes: Routes = [
  {path:"",
   loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {path:"company",
    loadChildren: () => import('./components/company/company.module').then(m => m.CompanyModule)
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
  {path:"documents",
    loadChildren: () => import('./components/documents/documents.module').then(m => m.DocumentsModule)
  },
  {
    path:"page-solution",
    loadChildren: () => import('./components/page-solution/solution.module').then(m => m.SolutionModule)
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


