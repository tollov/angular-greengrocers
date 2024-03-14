import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { CartItem } from 'src/app/models/cart.item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy{
  constructor(private readonly cartService: CartService){}
  items : CartItem[] = this.cartService.cart;
  totalPrice : number = 0;
  private subscription: Subscription = new Subscription();

  ngOnInit() {
    this.subscription = this.cartService.totalPrice.subscribe(
      (price:number) => {
        this.totalPrice = price;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
