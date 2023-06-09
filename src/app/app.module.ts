import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home-page/home-page.module';
import { ExperiencesPageModule } from './experiences-page/experiences-page.module';
import { ExperiencesService } from './services/experiences-api.service';
import { CartPageModule } from './cart-page/cart-page.module';
import { CartService } from './services/cart-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    HomePageModule,
    ExperiencesPageModule,
    AppRoutingModule,
    HttpClientModule,
    CartPageModule
  ],
  providers: [ExperiencesService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
