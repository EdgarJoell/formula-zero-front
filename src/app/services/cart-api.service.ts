import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class CartService {
   constructor(private http: HttpClient) { }

   getCartById(cartId: number) {
      return this.http.get(
         `http://localhost:8080/api/cart/${cartId}/`
      )
   }

   postCart(cartId: number, experienceId: number) {
      return this.http.post(
         `http://localhost:8080/api/cart/${cartId}/${experienceId}/`, {}
         );
    }

}