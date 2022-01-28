import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MainModule} from "./components/main/main.module";
import {UiKitModule} from "./components/ui-kit/ui-kit.module";
import { NfComponent } from './components/nf/nf.component';


const routes: Routes = [
  {
    path:"",
   loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
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
    path:"product",
    loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
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
    path:"news-block",
    loadChildren: () => import('./components/news-block/news-block.module').then(m => m.NewsBlockModule)
  },
  {
    path:"solution-category",
    loadChildren: () => import('./components/solution-category/solution-category.module').then(m => m.SolutionCategoryModule)
  },
  {
    path:"press",
    loadChildren: () => import('./components/press/press.module').then(m => m.PressModule)
  },

  {
    path:"services",
    loadChildren: () => import('./components/services/services.module').then(m => m.ServicesModule)
  },
  {
    path:"solution-examples",
    loadChildren: () => import('./components/solution-examples/solution-examples.module').then(m => m.SolutionExamplesModule)
  },
  {
    path:"contacts",
    loadChildren: () => import('./components/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path:"news-exhibition",
    loadChildren: () => import('./components/news-exhibition/news-exhibition.module').then(m => m.NewsExhibitionModule)
  },
  {
    path:"company",
    loadChildren: () => import('./components/company/company.module').then(m => m.CompanyModule)
  },
  {
    path:"404",
    component:NfComponent
  },
  {
    path:"**",
    redirectTo:'404'
  },
];
@NgModule({
  declarations: [
    AppComponent,
    NfComponent,
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


