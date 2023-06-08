import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperiencesService } from 'src/app/services/experiences-api.service';
import { CartService } from 'src/app/services/cart-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: any;
  experiences: any;

  constructor(private route: ActivatedRoute, private experiencesService: ExperiencesService, private cartService: CartService) { }

  totalPrice: number = 0;

  calculateTotalPrice(): number {
    let price: number = 0;
    for(let i = 0; i < this.experiences.length; i++) {
      price = price + this.experiences[i].price;
      console.log(price);
    }
    return price;
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCartById(1).subscribe(p => {
      console.log(p);
      this.cart = p;
      this.experiences = this.cart.experienceList;
    });
    console.log(this.cart);
  }
}
