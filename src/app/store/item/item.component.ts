import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { GroceryItem } from 'src/app/models/item';

@Component({
  selector: 'app-store-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class StoreItemComponent {
  constructor(private readonly cartService: CartService){}
  @Input() itemData : GroceryItem | null = null;

  onAddToCart() :void {
    if (this.itemData) this.cartService.addToCart(this.itemData);
  }
}
