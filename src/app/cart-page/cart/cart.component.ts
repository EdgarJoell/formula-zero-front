import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart: any;
  experiences: any;

  constructor(private cartService: CartService) { }

  totalPrice: number = 0;

  removeExperience(experienceId: number): any {
    this.cartService.removeFromCart(1, experienceId).subscribe(p => {
      console.log(p);
    })
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCartById(1).subscribe(p => {
      console.log(p);
      this.cart = p;
      this.experiences = this.cart.experienceList;
      let price: number = 0;
      for(let i = 0; i < this.experiences.length; i++) {
        price = price + this.experiences[i].price;
        console.log(price);
        this.totalPrice = price;
      }
    });
    console.log(this.cart);
  }
}
