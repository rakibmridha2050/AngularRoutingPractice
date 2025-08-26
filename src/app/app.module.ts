import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContractComponent } from './components/contract/contract.component';
import { ShopSingleComponent } from './components/shop-single/shop-single.component';
import { ShopComponent } from './components/shop/shop.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ReviewComponent } from './components/review/review.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContractComponent,
    ShopSingleComponent,
    ShopComponent,
    ErrorPageComponent,
    ReviewComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
