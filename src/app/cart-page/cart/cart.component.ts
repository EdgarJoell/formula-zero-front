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

  constructor(private route: ActivatedRoute, private experiencesService: ExperiencesService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCartById(1).subscribe(p => {
      console.log(p);
      this.cart = p;
    });
  }
}
