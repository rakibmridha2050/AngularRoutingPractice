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
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserAddEditComponent } from './components/user-add-edit/user-add-edit.component';
import { UserListComponent } from './components/user-list/user-list.component'

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
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    UserAddEditComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
