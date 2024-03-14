import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { CartItem } from 'src/app/models/cart.item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class CartItemComponent {
  constructor(private readonly cartService : CartService){}
  @Input() itemData: CartItem | null = null;

  onIncrement() {
    if (this.itemData) this.cartService.addToCart(this.itemData.item)
  }

  onDecrement() {
    if (this.itemData) this.cartService.removeFromCart(this.itemData.item)
  }
}
