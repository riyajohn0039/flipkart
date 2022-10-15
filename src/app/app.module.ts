import{HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';

import { CartComponent } from './cart/cart.component';
import { OffersComponent } from './offers/offers.component';
import { SellerComponent } from './seller/seller.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const appRoute:Routes=[{
  path:'',component:HomeComponent
},
  {
    path:'home',component:HomeComponent
  },
  {
    path:'Cart',component:CartComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'offers',component:OffersComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CartComponent,
    OffersComponent,
    SellerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
