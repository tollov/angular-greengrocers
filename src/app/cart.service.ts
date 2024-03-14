import { Injectable } from '@angular/core';
import { GroceryItem } from './models/item';
import { CartItem } from './models/cart.item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart : CartItem[] = [];
  private totalPriceSource = new BehaviorSubject<number>(0);
  totalPrice = this.totalPriceSource.asObservable();

  updateTotalPrice() {
    let sum = 0;
    this.cart.forEach(cartItem => sum += cartItem.item.price * cartItem.quantity);
    this.totalPriceSource.next(sum);
  }

  addToCart(item: GroceryItem) {
    const cartIndex = this.cart.findIndex(cartItem => cartItem.item.id === item.id);
    if (cartIndex !== -1) {
      this.cart[cartIndex].quantity += 1
    }
    else {
      this.cart.push({item: item, quantity: 1})
    }
    this.updateTotalPrice();
  }

  removeFromCart(item: GroceryItem) {
    const cartIndex = this.cart.findIndex(cartItem => cartItem.item.id === item.id);
    if (cartIndex !== -1) {
      this.cart[cartIndex].quantity -= 1
      if (this.cart[cartIndex].quantity === 0) this.cart.splice(cartIndex, 1)
    }
    this.updateTotalPrice();
  }

}
