import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartPageModule { }
