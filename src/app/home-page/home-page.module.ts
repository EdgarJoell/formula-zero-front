import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeSectionsModule } from './home-sections/home-sections.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeSectionsModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomePageModule { }
