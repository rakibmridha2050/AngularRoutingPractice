import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContractComponent } from './components/contract/contract.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopSingleComponent } from './components/shop-single/shop-single.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ReviewComponent } from './components/review/review.component';

const routes: Routes = [
  { path: '',redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contract', component: ContractComponent },
  {
    path: 'shop', component: ShopComponent,
    // children: [
    //   { path: 'single/:id', component: ShopSingleComponent },
    //   { path: 'review', component: ReviewComponent },
    // ]
  },
   { path: 'single/:id', component: ShopSingleComponent },
  { path: 'single', component: ShopSingleComponent },
  { path: '**', component: ErrorPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
